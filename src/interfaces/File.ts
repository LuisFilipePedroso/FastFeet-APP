export default interface IFile {
  id: number;
  name: string;
  path: string;
  url?: string;
  created_at: Date;
  updated_at: Date;
}
