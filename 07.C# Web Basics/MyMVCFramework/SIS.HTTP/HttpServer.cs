namespace SIS.HTTP
{
    using SIS.HTTP.Contracts;
    using System;
    using System.Collections.Generic;
    using System.Net;
    using System.Net.Sockets;
    using System.Text;
    using System.Threading.Tasks;

    public class HttpServer : IHttpServer
    {
        private readonly TcpListener tcpListener;

        public HttpServer(int port)
        {
            this.tcpListener = new TcpListener(IPAddress.Loopback, port);
        }

        public async Task ResetAsync()
        {
            this.Stop();
            await this.StartAsync();
        }

        public async Task StartAsync()
        {
            TcpClient tcpClient = await this.tcpListener.AcceptTcpClientAsync();

            Task.Run(() => ProcessClientAsync(tcpClient));
        }

        private async Task ProcessClientAsync(TcpClient tcpClient)
        {
            throw new NotImplementedException();
        }

        public void Stop()
        {
            this.tcpListener.Stop();
        }
    }
}
