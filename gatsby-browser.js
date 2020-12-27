export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    'This application has been updated. ' +
      'Reload to display the latest version?',
  );

  if (answer) {
    window.location.reload();
  }
};
