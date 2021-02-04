import Cookie from "js-cookie"
import { verify } from "jsonwebtoken"

export const getAccessToken = (isServer: boolean, cookie?: string) => {
  if (isServer && cookie === undefined) {
      return undefined
  } else if (isServer) {
      return cookie
          ?.split(";")
          .find((c: string) => c.trim().startsWith("accessToken="))
          ?.split("=")[1]
  } else {
      return Cookie.get("accessToken")
  }
}

export const isAuthenticated = (req) => {
  const auth = req.headers.authorization
  if (auth) {
    const [authType, authToken] = auth.split(" ")
    if (authType !== "Bearer") {
      return new Error("Not Bearer")
    }

    try {
      verify(authToken, process.env.JWT_SECRET)
      return true
    } catch(err) {
      return false
    }
  }
}

export const getUserWithToken = (req) => {
  const auth = req.headers.authorization
  if (auth) {
    const [authType, authToken] = auth.split(" ")
    if (authType !== "Bearer") {
      return new Error("Not Bearer")
    }

    try {
      const user = verify(authToken, process.env.JWT_SECRET)
      return user
    } catch(err) {
      return false
    }
  }
}

const redirectPage = (path) => ({
  redirect: {
    destination: path,
    permanent: false,
  },
})

type ClientAuthType = {
  context: any,
  redirect: string,
  path?: string,
}

export const clientAuthorization = ({
  context, redirect, path
}: ClientAuthType) => {
  const auth = context.req.headers.cookie
  const excludes = ["/signin"]
  
  if (auth) {
    const authToken = auth.split(";")
    .find((c: string) => c.trim().startsWith("accessToken="))
    ?.split("=")[1]
    
    const isInclude = excludes.includes(path)

    try {
      verify(authToken, process.env.JWT_SECRET)

      if (isInclude) {
        return redirectPage(redirect)
      } else {
        return {
          props: {}
        }
      }
    } catch(err) {
      if (isInclude) {
        return {
          props: {}
        }
      } else {
        return redirectPage(redirect)
      }
    }
  }

  return {
    notFound: true,
  }
}