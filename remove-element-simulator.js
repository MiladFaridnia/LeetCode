// Each snapshot describes the state after one input element has been processed.
function buildRemoveElementSteps(values, valueToRemove) {
  const working = values.slice();
  let writeIndex = 0;
  const steps = [{
    values: working.slice(), readIndex: 0, writeIndex,
    message: values.length
      ? 'شروع: هنوز عددی نخوانده‌ایم. هر دو نشانگر روی اندیس صفر هستند.'
      : 'آرایه خالی است؛ چیزی برای خواندن نداریم. جواب نهایی k = 0 است.'
  }];
  for (let readIndex = 0; readIndex < working.length; readIndex++) {
    const currentValue = working[readIndex];
    const keep = currentValue !== valueToRemove;
    const destination = writeIndex;
    if (keep) working[writeIndex++] = currentValue;
    steps.push({
      values: working.slice(), readIndex: readIndex + 1, writeIndex,
      message: keep
        ? `اندیس ${readIndex}: عدد ${currentValue} را در خانهٔ ${destination} نوشتیم؛ جای نوشتن بعدی ${writeIndex} است.`
        : `اندیس ${readIndex}: عدد ${currentValue} برابر مقدار حذف‌شونده است؛ رد شدیم. جای نوشتن همان ${writeIndex} ماند.`
    });
  }
  return steps;
}

let removeElementTimer = null;
function stopRemoveElementAutoPlay() {
  if (removeElementTimer !== null) clearInterval(removeElementTimer);
  removeElementTimer = null;
  const playButton = document.getElementById('re-play');
  if (playButton) {
    playButton.textContent = 'پخش خودکار ▶';
    playButton.setAttribute('aria-pressed', 'false');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const examples = {
    basic: { values: [3, 2, 2, 3], target: 3 },
    empty: { values: [], target: 3 },
    all: { values: [3, 3], target: 3 },
    none: { values: [1, 2], target: 3 },
    repeated: { values: [3, 3, 2, 3, 2], target: 3 }
  };
  const select = document.getElementById('re-example');
  if (!select) return;
  let example = examples.basic;
  let steps = buildRemoveElementSteps(example.values, example.target);
  let stepIndex = 0;
  const byId = id => document.getElementById(id);

  function render() {
    const step = steps[stepIndex];
    const finished = stepIndex === steps.length - 1;
    const array = byId('re-array');
    array.replaceChildren();
    step.values.forEach((value, index) => {
      const cell = document.createElement('div');
      cell.className = 're-cell';
      if (index < step.writeIndex) cell.classList.add('re-valid');
      if (index === step.readIndex && !finished) cell.classList.add('re-reading');
      if (index === step.writeIndex) cell.classList.add('re-writing');
      cell.setAttribute('aria-label', `اندیس ${index}: ${value}${index < step.writeIndex ? '، بخش معتبر جواب' : ''}`);
      const number = document.createElement('strong');
      number.textContent = value;
      const label = document.createElement('small');
      label.textContent = `index ${index}`;
      cell.append(number, label);
      array.append(cell);
    });
    if (!step.values.length) array.textContent = '[ ]';
    byId('re-read').textContent = finished ? 'پایان' : step.readIndex;
    byId('re-write').textContent = step.writeIndex;
    byId('re-target').textContent = example.target;
    byId('re-count').textContent = step.writeIndex;
    byId('re-status').textContent = step.message + (finished && step.values.length
      ? ` پایان: k = ${step.writeIndex}. فقط ${step.writeIndex} خانهٔ اول جواب است؛ بقیه مهم نیست.` : '');
    byId('re-result').textContent = JSON.stringify(step.values.slice(0, step.writeIndex));
    byId('re-progress').textContent = ` — گام ${stepIndex} از ${steps.length - 1}`;
    byId('re-prev').disabled = stepIndex === 0;
    byId('re-next').disabled = finished;
    byId('re-play').disabled = finished;
  }

  function move(delta) {
    stepIndex = Math.max(0, Math.min(steps.length - 1, stepIndex + delta));
    if (stepIndex === steps.length - 1) stopRemoveElementAutoPlay();
    render();
  }
  byId('re-prev').addEventListener('click', () => { stopRemoveElementAutoPlay(); move(-1); });
  byId('re-next').addEventListener('click', () => { stopRemoveElementAutoPlay(); move(1); });
  byId('re-reset').addEventListener('click', () => {
    stopRemoveElementAutoPlay(); stepIndex = 0; render();
  });
  select.addEventListener('change', () => {
    stopRemoveElementAutoPlay();
    example = examples[select.value];
    steps = buildRemoveElementSteps(example.values, example.target);
    stepIndex = 0;
    render();
  });
  byId('re-play').addEventListener('click', () => {
    if (removeElementTimer !== null) { stopRemoveElementAutoPlay(); return; }
    if (stepIndex === steps.length - 1) return;
    byId('re-play').textContent = 'توقف ⏸';
    byId('re-play').setAttribute('aria-pressed', 'true');
    removeElementTimer = setInterval(() => move(1), 850);
  });
  render();
});
