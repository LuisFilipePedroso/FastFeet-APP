export default interface IRecipient {
  id?: number;
  name: string;
  street: string;
  number: number;
  complement: string;
  state: string;
  city: string;
  address?: string;
  postal_code: string;
}
