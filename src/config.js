export default function getRemotePath() {
  switch (process.env.NODE_ENV) {
    case 'development':
    case 'production':
      return '/';
    case 'test':
    default:
      return '/k_test_site';
  }
}
