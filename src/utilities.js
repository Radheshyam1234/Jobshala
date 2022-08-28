export const isPresentInApplied = (appliedJobs, job) => {
  return appliedJobs.find((appliedJob) => appliedJob.jobId === job.jobId);
};

export const isPresentInSaved = (savedJobs, job) => {
  return savedJobs.find((savedJob) => savedJob.jobId === job.jobId);
};
