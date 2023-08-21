interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Team Member'],
  tenantName: 'Organization',
  applicationName: 'Eternal AI Chat',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
