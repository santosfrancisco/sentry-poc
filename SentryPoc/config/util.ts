const sanitizeCPF = (s: string) => {
  return s.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, `$1.###.###-$4`);
};

export const sanitize = (object: any) => {
  Object.keys({...object}).forEach(function (k) {
    if (object[k] && typeof object[k] === 'object') {
      sanitize(object[k]);
      return;
    }
    if (k === 'cpf') {
      object[k] = sanitizeCPF(object[k]);
    }
  });
  return object;
};
