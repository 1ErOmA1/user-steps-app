export interface Step {
  id: number;
  title: string;
  status: 'disabled' | 'active' | 'completed';
  icon: string;
  iconDark?: string;
}