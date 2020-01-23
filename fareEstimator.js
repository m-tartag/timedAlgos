function fareEstimator(
  ride_time,
  ride_distance,
  cost_per_minute,
  cost_per_mile
) {
  const ARR1 = cost_per_minute.map(item => item * ride_time);
  const ARR2 = cost_per_mile.map(item => item * ride_distance);
  const SOLVED = [];

  for (let i = 0; i < cost_per_minute.length; i++) {
    SOLVED[i] = ARR1[i] + ARR2[i];
  }

  return SOLVED;
}
