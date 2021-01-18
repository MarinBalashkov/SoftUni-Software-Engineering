namespace SIS.HTTP.Enums
{
    public enum HttpResponseType
    {
        Ok = 200,
        MovedPermanently = 301,
        Found = 302,
        TemporaryRedirect = 307,
        Unauthorized = 401,
        Forbidden = 404,
        InternelServerErrror = 500,
        NotImplemented = 501,
    }
}
