import { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    const summary = document.getElementById('review-summary');
    if (summary) summary.textContent = 'Check the latest customer feedback directly on Google.';
    const container = document.getElementById('reviews-container');
    if (container) container.textContent = 'For current review details, visit the live H2H Google Business Profile.';
  }, []);
  return null;
}
