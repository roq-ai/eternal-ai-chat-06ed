const mapping: Record<string, string> = {
  chats: 'chat',
  invitations: 'invitation',
  messages: 'message',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
