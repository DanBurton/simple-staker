export default function pretty(r) {
    if (!r) {
      return r;
    } else if (typeof r === 'string') {
      return r;
    } else if (r._isBigNumber) {
      return r.toString();
    } else if (r.networkAccount) {
      if (r.networkAccount.addr) {
        return r.networkAccount.addr.slice(0, 8);
      } else if (r.networkAccount.address) {
        return r.networkAccount.address.slice(0, 8);
      } else {
        return '<some acc>';
      }
    } else if (Array.isArray(r) && r[0] == 'Some') {
      return pretty(r[1]);
    } else if (Array.isArray(r)) {
      return r.map((x) => pretty(x));
    } else if (Object.keys(r).length > 0) {
      const o = {};
      for (const k in r) { o[k] = pretty(r[k]); }
      return o;
    } else if (r.toString) {
      return r.toString();
    } else {
      return r
    }
  }