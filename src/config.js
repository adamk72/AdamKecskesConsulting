export default function getRemotePath() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return '/';
    case 'development':
    case 'test':
    default:
      return '/k_test_site';
  }
}
