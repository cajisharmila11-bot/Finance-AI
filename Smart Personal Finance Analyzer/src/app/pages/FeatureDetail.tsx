import { Link, useParams } from 'react-router';
import { ArrowLeft, PieChart, BarChart3, Brain, Sparkles, Target, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function FeatureDetail() {
  const { feature } = useParams();

  const features: Record<string, {
    title: string;
    icon: any;
    gradient: string;
    description: string;
    benefits: string[];
    howItWorks: string[];
  }> = {
    'expense-tracking': {
      title: 'Smart Expense Tracking',
      icon: PieChart,
      gradient: 'from-indigo-500 to-violet-600',
      description: 'Effortlessly track every expense with intelligent categorization and real-time insights. Never lose track of where your money goes.',
      benefits: [
        'Quick expense entry with smart defaults',
        'Automatic categorization using AI',
        'Receipt scanning and OCR (coming soon)',
        'Multi-currency support',
        'Recurring expense detection',
      ],
      howItWorks: [
        'Add expenses in seconds with our intuitive interface',
        'AI automatically categorizes your spending',
        'View real-time updates on your dashboard',
        'Get insights into spending patterns',
      ],
    },
    'analytics': {
      title: 'Financial Analytics',
      icon: BarChart3,
      gradient: 'from-violet-500 to-purple-600',
      description: 'Gain deep insights into your financial health with comprehensive analytics and beautiful visualizations.',
      benefits: [
        'Interactive charts and graphs',
        'Category-wise breakdown',
        'Time-based trend analysis',
        'Spending vs income comparison',
        'Exportable reports',
      ],
      howItWorks: [
        'Analyze spending patterns across categories',
        'Compare monthly and yearly trends',
        'Identify areas for improvement',
        'Make data-driven financial decisions',
      ],
    },
    'prediction': {
      title: 'AI Expense Prediction',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-600',
      description: 'Leverage machine learning to predict future expenses using advanced linear regression models trained on your spending history.',
      benefits: [
        'Accurate expense forecasting',
        'Linear regression analysis',
        'Confidence intervals and accuracy metrics',
        'Seasonal pattern detection',
        'Early warning system',
      ],
      howItWorks: [
        'ML model analyzes your historical spending',
        'Identifies patterns and trends',
        'Predicts future expenses with high accuracy',
        'Updates predictions as new data comes in',
      ],
    },
    'budget': {
      title: 'Budget Recommendation Engine',
      icon: Sparkles,
      gradient: 'from-pink-500 to-rose-600',
      description: 'Get personalized budget recommendations powered by rule-based intelligence tailored to your spending habits.',
      benefits: [
        'Personalized budget suggestions',
        'Rule-based optimization',
        'Category-specific limits',
        'Adaptive recommendations',
        'Goal-oriented planning',
      ],
      howItWorks: [
        'Engine analyzes your spending patterns',
        'Applies intelligent rules and algorithms',
        'Suggests optimal budget allocation',
        'Adjusts recommendations based on goals',
      ],
    },
    'savings': {
      title: 'Savings Goal Planner',
      icon: Target,
      gradient: 'from-teal-500 to-cyan-600',
      description: 'Set, track, and achieve your financial goals with visual progress tracking and milestone celebrations.',
      benefits: [
        'Multiple simultaneous goals',
        'Visual progress tracking',
        'Milestone notifications',
        'Timeline projections',
        'Achievement rewards',
      ],
      howItWorks: [
        'Set your savings goals and targets',
        'Track progress with visual indicators',
        'Get notifications on milestones',
        'Celebrate achievements together',
      ],
    },
  };

  const currentFeature = features[feature || 'expense-tracking'];
  const Icon = currentFeature.icon;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${currentFeature.gradient} flex items-center justify-center`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {currentFeature.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {currentFeature.description}
          </p>
        </div>

        {/* Benefits */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {currentFeature.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${currentFeature.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* How It Works */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How It Works</h2>
          <div className="space-y-4">
            {currentFeature.howItWorks.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${currentFeature.gradient} text-white flex items-center justify-center font-bold flex-shrink-0`}>
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Link to="/signup">
            <Button size="lg" className={`bg-gradient-to-r ${currentFeature.gradient} hover:opacity-90 text-white px-8 py-6 text-lg rounded-2xl`}>
              Get Started Now
            </Button>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
