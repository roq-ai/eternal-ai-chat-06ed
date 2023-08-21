import { UserInterface } from 'interfaces/user';
import { ChatInterface } from 'interfaces/chat';
import { GetQueryInterface } from 'interfaces';

export interface MessageInterface {
  id?: string;
  content: string;
  user_id: string;
  chat_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  chat?: ChatInterface;
  _count?: {};
}

export interface MessageGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  chat_id?: string;
}
