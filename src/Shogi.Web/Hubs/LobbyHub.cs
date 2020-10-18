using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shogi.Web.Hubs
{
    public class LobbyHub : Hub
    {
        static HashSet<string> _currentConnections = new HashSet<string>();

        public override Task OnConnectedAsync()
        {
            var id = Context.ConnectionId;
            _currentConnections.Add(id);

            Clients.All.SendAsync("ReceiveConnectionsList", _currentConnections.ToList());

            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            var connection = _currentConnections.FirstOrDefault(x => x == Context.ConnectionId);

            if (connection != null)
            {
                _currentConnections.Remove(connection);
            }

            Clients.All.SendAsync("ReceiveConnectionsList", _currentConnections.ToList());

            return base.OnDisconnectedAsync(exception);
        }
    }
}