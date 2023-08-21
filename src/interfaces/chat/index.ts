import { MessageInterface } from 'interfaces/message';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ChatInterface {
  id?: string;
  title: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  message?: MessageInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    message?: number;
  };
}

export interface ChatGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  user_id?: string;
  organization_id?: string;
}
