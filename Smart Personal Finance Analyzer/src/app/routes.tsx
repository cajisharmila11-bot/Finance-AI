import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout/Layout';
import { Landing } from './pages/Landing';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { Dashboard } from './pages/Dashboard';
import { AddExpense } from './pages/AddExpense';
import { Analytics } from './pages/Analytics';
import { Profile } from './pages/Profile';
import { FeatureDetail } from './pages/FeatureDetail';
import { HowItWorksStep } from './pages/HowItWorksStep';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Landing },
      { path: 'signup', Component: SignUp },
      { path: 'login', Component: Login },
      { path: 'forgot-password', Component: ForgotPassword },
      { path: 'dashboard', Component: Dashboard },
      { path: 'add-expense', Component: AddExpense },
      { path: 'analytics', Component: Analytics },
      { path: 'profile', Component: Profile },
      { path: 'feature/:feature', Component: FeatureDetail },
      { path: 'how-it-works/step-:step', Component: HowItWorksStep },
      { path: '*', Component: NotFound },
    ],
  },
]);