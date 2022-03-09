// Automatically generated with Reach 0.1.9 (3ceb6808)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (3ceb6808)';
export const _backendVersion = 10;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2]);
  const ctc4 = stdlib.T_Struct([['rewardToken1', ctc1], ['stakeToken', ctc1], ['rewardsPerBlock', ctc3], ['duration', ctc2]]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Object({
    rewards: ctc3,
    stake: ctc2
    });
  const ctc10 = stdlib.T_Data({
    None: ctc8,
    Some: ctc9
    });
  const map0_ctc = ctc10;
  
  
  return {
    infos: {
      end: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1424, v1425, v1426, v1427, v1428, v1444, v1447, v1448, v1449, v1450, v1451] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1497, v1498, v2592, v2601, v2603, v2606, v2615, v2617] = svs;
            return (await ((async () => {
              
              
              return v1469;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654] = svs;
            return (await ((async () => {
              
              
              return v1469;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      opts: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1424, v1425, v1426, v1427, v1428, v1444, v1447, v1448, v1449, v1450, v1451] = svs;
            return (await ((async () => {
              
              
              return v1425;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1497, v1498, v2592, v2601, v2603, v2606, v2615, v2617] = svs;
            return (await ((async () => {
              
              
              return v1425;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654] = svs;
            return (await ((async () => {
              
              
              return v1425;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      remainingRewards: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1424, v1425, v1426, v1427, v1428, v1444, v1447, v1448, v1449, v1450, v1451] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1497, v1498, v2592, v2601, v2603, v2606, v2615, v2617] = svs;
            return (await ((async () => {
              
              
              return v1488;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654] = svs;
            return (await ((async () => {
              
              
              return v1488;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      rewardsAvailableAt: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1424, v1425, v1426, v1427, v1428, v1444, v1447, v1448, v1449, v1450, v1451] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1497, v1498, v2592, v2601, v2603, v2606, v2615, v2617] = svs;
            return (await ((async (_v2621, _v2622 ) => {
                const v2621 = stdlib.protect(ctc0, _v2621, null);
                const v2622 = stdlib.protect(ctc2, _v2622, null);
              
              const v2623 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2621), null);
              const v2625 = {
                rewards: v1485,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
                };
              const v2626 = stdlib.fromSome(v2623, v2625);
              const v2627 = v2626.stake;
              const v2632 = v2626.rewards;
              const v2633 = v2632[stdlib.checkedBigNumberify('./index.rsh:139:54:array ref', stdlib.UInt_max, 0)];
              const v2636 = stdlib.le(v1469, v2622);
              const v2637 = v2636 ? v1469 : v2622;
              let v2638;
              const v2639 = stdlib.ge(v1489, v2637);
              if (v2639) {
                v2638 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2640 = stdlib.sub(v2637, v1489);
                v2638 = v2640;
                }
              const v2642 = stdlib.mul(v2638, v1448);
              const v2643 = stdlib.add(v2592, v2642);
              const v2645 = stdlib.le(v2643, v2601);
              const v2646 = v2645 ? v2643 : v2601;
              let v2649;
              const v2650 = stdlib.eq(v1490, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
              if (v2650) {
                v2649 = v2646;
                }
              else {
                const v2651 = stdlib.muldiv(v2646, v2627, v1490);
                v2649 = v2651;
                }
              let v2652;
              const v2653 = stdlib.ge(v2633, v2649);
              if (v2653) {
                v2652 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2654 = stdlib.sub(v2649, v2633);
                v2652 = v2654;
                }
              const v2655 = stdlib.le(v2652, v2603);
              const v2656 = v2655 ? v2652 : v2603;
              const v2668 = v2632[stdlib.checkedBigNumberify('./index.rsh:139:54:array ref', stdlib.UInt_max, 1)];
              let v2673;
              if (v2639) {
                v2673 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2675 = stdlib.sub(v2637, v1489);
                v2673 = v2675;
                }
              const v2677 = stdlib.mul(v2673, v1450);
              const v2678 = stdlib.add(v2606, v2677);
              const v2680 = stdlib.le(v2678, v2615);
              const v2681 = v2680 ? v2678 : v2615;
              let v2684;
              if (v2650) {
                v2684 = v2681;
                }
              else {
                const v2686 = stdlib.muldiv(v2681, v2627, v1490);
                v2684 = v2686;
                }
              let v2687;
              const v2688 = stdlib.ge(v2668, v2684);
              if (v2688) {
                v2687 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v2689 = stdlib.sub(v2684, v2668);
                v2687 = v2689;
                }
              const v2690 = stdlib.le(v2687, v2617);
              const v2691 = v2690 ? v2687 : v2617;
              const v2693 = [v2656, v2691];
              
              return v2693;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654] = svs;
            return (await ((async (_v1655, _v1656 ) => {
                const v1655 = stdlib.protect(ctc0, _v1655, null);
                const v1656 = stdlib.protect(ctc2, _v1656, null);
              
              const v1657 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1655), null);
              const v1659 = {
                rewards: v1485,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
                };
              const v1660 = stdlib.fromSome(v1657, v1659);
              const v1661 = v1660.stake;
              const v1666 = v1660.rewards;
              const v1667 = v1666[stdlib.checkedBigNumberify('./index.rsh:139:54:array ref', stdlib.UInt_max, 0)];
              const v1670 = stdlib.le(v1469, v1656);
              const v1671 = v1670 ? v1469 : v1656;
              let v1672;
              const v1673 = stdlib.ge(v1489, v1671);
              if (v1673) {
                v1672 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v1674 = stdlib.sub(v1671, v1489);
                v1672 = v1674;
                }
              const v1676 = stdlib.mul(v1672, v1448);
              const v1677 = stdlib.add(v1626, v1676);
              const v1679 = stdlib.le(v1677, v1635);
              const v1680 = v1679 ? v1677 : v1635;
              let v1683;
              const v1684 = stdlib.eq(v1490, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
              if (v1684) {
                v1683 = v1680;
                }
              else {
                const v1685 = stdlib.muldiv(v1680, v1661, v1490);
                v1683 = v1685;
                }
              let v1686;
              const v1687 = stdlib.ge(v1667, v1683);
              if (v1687) {
                v1686 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v1688 = stdlib.sub(v1683, v1667);
                v1686 = v1688;
                }
              const v1689 = stdlib.le(v1686, v1637);
              const v1690 = v1689 ? v1686 : v1637;
              const v1702 = v1666[stdlib.checkedBigNumberify('./index.rsh:139:54:array ref', stdlib.UInt_max, 1)];
              let v1707;
              if (v1673) {
                v1707 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v1709 = stdlib.sub(v1671, v1489);
                v1707 = v1709;
                }
              const v1711 = stdlib.mul(v1707, v1450);
              const v1712 = stdlib.add(v1640, v1711);
              const v1714 = stdlib.le(v1712, v1649);
              const v1715 = v1714 ? v1712 : v1649;
              let v1718;
              if (v1684) {
                v1718 = v1715;
                }
              else {
                const v1720 = stdlib.muldiv(v1715, v1661, v1490);
                v1718 = v1720;
                }
              let v1721;
              const v1722 = stdlib.ge(v1702, v1718);
              if (v1722) {
                v1721 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
                }
              else {
                const v1723 = stdlib.sub(v1718, v1702);
                v1721 = v1723;
                }
              const v1724 = stdlib.le(v1721, v1651);
              const v1725 = v1724 ? v1721 : v1651;
              const v1727 = [v1690, v1725];
              
              return v1727;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      staked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1424, v1425, v1426, v1427, v1428, v1444, v1447, v1448, v1449, v1450, v1451] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1497, v1498, v2592, v2601, v2603, v2606, v2615, v2617] = svs;
            return (await ((async (_v1470 ) => {
                const v1470 = stdlib.protect(ctc0, _v1470, null);
              
              const v1471 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1470), null);
              const v1472 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
              const v1473 = {
                rewards: v1472,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
                };
              const v1474 = stdlib.fromSome(v1471, v1473);
              const v1475 = v1474.stake;
              
              return v1475;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654] = svs;
            return (await ((async (_v1470 ) => {
                const v1470 = stdlib.protect(ctc0, _v1470, null);
              
              const v1471 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1470), null);
              const v1472 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
              const v1473 = {
                rewards: v1472,
                stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
                };
              const v1474 = stdlib.fromSome(v1471, v1473);
              const v1475 = v1474.stake;
              
              return v1475;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      totalStaked: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1424, v1425, v1426, v1427, v1428, v1444, v1447, v1448, v1449, v1450, v1451] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1497, v1498, v2592, v2601, v2603, v2606, v2615, v2617] = svs;
            return (await ((async () => {
              
              
              return v1490;}))(...args));
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654] = svs;
            return (await ((async () => {
              
              
              return v1490;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc7, ctc2, ctc2, ctc2, ctc2, ctc2],
      3: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc7, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      6: [ctc0, ctc4, ctc1, ctc1, ctc2, ctc2, ctc2, ctc3, ctc3, ctc2, ctc2, ctc2, ctc2, ctc7, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2, ctc2, ctc2, ctc2, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Any_halt(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Any_halt expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Any_halt expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['duration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Any_halt0_1144: ctc11,
    Deployer0_1144: ctc0
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1497, v1498, v2592, v2601, v2603, v2606, v2615, v2617] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v2702 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:250:9:application call to [unknown function] (defined at: ./index.rsh:250:9:function exp)', 'at ./index.rsh:248:7:application call to "runAny_halt0_1144" (defined at: ./index.rsh:250:9:function exp)', 'at ./index.rsh:248:7:application call to [unknown function] (defined at: ./index.rsh:248:7:function exp)'],
    msg: 'in',
    who: 'Any_halt'
    });
  const v2705 = ['Any_halt0_1144', v2702];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1497, v1498, v2592, v2601, v2603, v2606, v2615, v2617, v2705],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:250:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2710], secs: v2712, time: v2711, didSend: v1196, from: v2709 } = txn1;
      
      switch (v2710[0]) {
        case 'Any_halt0_1144': {
          const v2713 = v2710[1];
          ;
          undefined /* setApiDetails */;
          const v2720 = null;
          const v2721 = await txn1.getOutput('Any_halt', 'v2720', ctc0, v2720);
          
          sim_r.txns.push({
            amt: v1498,
            kind: 'from',
            to: v1424,
            tok: undefined /* Nothing */
            });
          const v2731 = v1497[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
          const v2732 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
          const v2738 = stdlib.sub(v2732, v2732);
          const v2741 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 1)];
          const v2742 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 2)];
          const v2743 = [v2738, v2741, v2742];
          const v2744 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 0), v2743);
          sim_r.txns.push({
            amt: v2732,
            kind: 'from',
            to: v1424,
            tok: v1426
            });
          const v2745 = v2744[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 1)];
          const v2746 = v2745[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: v2746,
            kind: 'from',
            to: v1424,
            tok: v1427
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v1427
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v1426
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Deployer0_1144': {
          const v2810 = v2710[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2710], secs: v2712, time: v2711, didSend: v1196, from: v2709 } = txn1;
  switch (v2710[0]) {
    case 'Any_halt0_1144': {
      const v2713 = v2710[1];
      ;
      undefined /* setApiDetails */;
      const v2720 = null;
      const v2721 = await txn1.getOutput('Any_halt', 'v2720', ctc0, v2720);
      if (v1196) {
        stdlib.protect(ctc0, await interact.out(v2713, v2721), {
          at: './index.rsh:250:10:application',
          fs: ['at ./index.rsh:250:10:application call to [unknown function] (defined at: ./index.rsh:250:10:function exp)', 'at ./index.rsh:250:30:application call to "k" (defined at: ./index.rsh:250:24:function exp)'],
          msg: 'out',
          who: 'Any_halt'
          });
        }
      else {
        }
      
      ;
      const v2731 = v1497[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
      const v2732 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
      const v2738 = stdlib.sub(v2732, v2732);
      const v2741 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 1)];
      const v2742 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 2)];
      const v2743 = [v2738, v2741, v2742];
      const v2744 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 0), v2743);
      ;
      const v2745 = v2744[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 1)];
      const v2746 = v2745[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 0)];
      ;
      return;
      
      break;
      }
    case 'Deployer0_1144': {
      const v2810 = v2710[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Struct([['rewardToken1', ctc5], ['stakeToken', ctc5], ['rewardsPerBlock', ctc2], ['duration', ctc1]]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    Staker_harvest0_576: ctc7,
    Staker_stake0_576: ctc8,
    Staker_withdraw0_576: ctc8
    });
  const ctc10 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  const ctc11 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  const ctc12 = stdlib.T_Data({
    Any_halt0_1144: ctc7,
    Deployer0_1144: ctc0
    });
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Bool;
  const ctc15 = stdlib.T_Tuple([ctc1, ctc1, ctc14]);
  const ctc16 = stdlib.T_Array(ctc15, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v1412 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1413 = [v1412, v1412];
  const v1417 = stdlib.protect(ctc6, interact.opts, 'for Deployer\'s interact field opts');
  
  const v1420 = v1417.rewardToken1;
  const v1421 = v1417.stakeToken;
  const v1422 = stdlib.tokenEq(v1420, v1421);
  const v1423 = v1422 ? false : true;
  stdlib.assert(v1423, {
    at: './index.rsh:71:11:application',
    fs: ['at ./index.rsh:68:16:application call to [unknown function] (defined at: ./index.rsh:68:20:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1417, v1420, v1421],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6, ctc5, ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1425, v1426, v1427], secs: v1429, time: v1428, didSend: v36, from: v1424 } = txn1;
      
      const v1430 = stdlib.tokenEq(v1426, v1427);
      const v1431 = v1430 ? false : true;
      ;
      const v1432 = v1413[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 0)];
      const v1434 = v1432[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 1)];
      const v1435 = v1432[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 2)];
      const v1436 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1434, v1435];
      const v1437 = stdlib.Array_set(v1413, stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 0), v1436);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1426
        });
      const v1439 = v1437[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 1)];
      const v1441 = v1439[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 1)];
      const v1442 = v1439[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 2)];
      const v1443 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1441, v1442];
      const v1444 = stdlib.Array_set(v1437, stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 1), v1443);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
        kind: 'init',
        tok: v1427
        });
      ;
      const v1446 = v1425.rewardsPerBlock;
      const v1447 = v1425.duration;
      const v1448 = v1446[stdlib.checkedBigNumberify('./index.rsh:79:20:array ref', stdlib.UInt_max, 0)];
      const v1449 = stdlib.mul(v1448, v1447);
      const v1450 = v1446[stdlib.checkedBigNumberify('./index.rsh:80:20:array ref', stdlib.UInt_max, 1)];
      const v1451 = stdlib.mul(v1450, v1447);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc5, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1425, v1426, v1427], secs: v1429, time: v1428, didSend: v36, from: v1424 } = txn1;
  const v1430 = stdlib.tokenEq(v1426, v1427);
  const v1431 = v1430 ? false : true;
  stdlib.assert(v1431, {
    at: './index.rsh:73:12:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v1432 = v1413[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 0)];
  const v1434 = v1432[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 1)];
  const v1435 = v1432[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 2)];
  const v1436 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1434, v1435];
  const v1437 = stdlib.Array_set(v1413, stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 0), v1436);
  ;
  const v1439 = v1437[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 1)];
  const v1441 = v1439[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 1)];
  const v1442 = v1439[stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 2)];
  const v1443 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1441, v1442];
  const v1444 = stdlib.Array_set(v1437, stdlib.checkedBigNumberify('./index.rsh:73:12:dot', stdlib.UInt_max, 1), v1443);
  ;
  ;
  const v1446 = v1425.rewardsPerBlock;
  const v1447 = v1425.duration;
  const v1448 = v1446[stdlib.checkedBigNumberify('./index.rsh:79:20:array ref', stdlib.UInt_max, 0)];
  const v1449 = stdlib.mul(v1448, v1447);
  const v1450 = v1446[stdlib.checkedBigNumberify('./index.rsh:80:20:array ref', stdlib.UInt_max, 1)];
  const v1451 = stdlib.mul(v1450, v1447);
  const txn2 = await (ctc.sendrecv({
    args: [v1424, v1425, v1426, v1427, v1428, v1444, v1447, v1448, v1449, v1450, v1451],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1428,
    onlyIf: true,
    out_tys: [],
    pay: [v1449, [[v1451, v1426]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v1454, time: v1453, didSend: v51, from: v1452 } = txn2;
      
      sim_r.txns.push({
        amt: v1449,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1457 = v1444[stdlib.checkedBigNumberify('./index.rsh:82:12:dot', stdlib.UInt_max, 0)];
      const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:82:12:dot', stdlib.UInt_max, 0)];
      const v1459 = stdlib.add(v1458, v1451);
      const v1462 = v1457[stdlib.checkedBigNumberify('./index.rsh:82:12:dot', stdlib.UInt_max, 1)];
      const v1463 = v1457[stdlib.checkedBigNumberify('./index.rsh:82:12:dot', stdlib.UInt_max, 2)];
      const v1464 = [v1459, v1462, v1463];
      const v1465 = stdlib.Array_set(v1444, stdlib.checkedBigNumberify('./index.rsh:82:12:dot', stdlib.UInt_max, 0), v1464);
      sim_r.txns.push({
        amt: v1451,
        kind: 'to',
        tok: v1426
        });
      const v1466 = stdlib.addressEq(v1424, v1452);
      ;
      const v1468 = stdlib.add(v1428, stdlib.checkedBigNumberify('./index.rsh:87:39:decimal', stdlib.UInt_max, 2));
      const v1469 = stdlib.add(v1468, v1447);
      
      const v1485 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v1486 = [v1449, v1451];
      const v1487 = v1485;
      const v1488 = v1486;
      const v1489 = v1468;
      const v1490 = stdlib.checkedBigNumberify('./index.rsh:120:21:decimal', stdlib.UInt_max, 0);
      const v1491 = v1453;
      const v1492 = v1428;
      const v1497 = v1465;
      const v1498 = v1449;
      
      if (await (async () => {
        const v1621 = stdlib.eq(v1490, stdlib.checkedBigNumberify('./index.rsh:168:27:decimal', stdlib.UInt_max, 0));
        const v1623 = stdlib.le(v1492, v1469);
        const v1624 = v1621 ? v1623 : true;
        
        return v1624;})()) {
        const v1626 = v1487[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
        const v1627 = stdlib.le(v1469, v1492);
        const v1628 = v1627 ? v1469 : v1492;
        let v1629;
        const v1630 = stdlib.ge(v1489, v1628);
        if (v1630) {
          v1629 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1631 = stdlib.sub(v1628, v1489);
          v1629 = v1631;
          }
        const v1633 = stdlib.mul(v1629, v1448);
        const v1634 = stdlib.add(v1626, v1633);
        const v1635 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
        const v1636 = stdlib.le(v1634, v1635);
        const v1637 = v1636 ? v1634 : v1635;
        const v1640 = v1487[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
        let v1643;
        if (v1630) {
          v1643 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1645 = stdlib.sub(v1628, v1489);
          v1643 = v1645;
          }
        const v1647 = stdlib.mul(v1643, v1450);
        const v1648 = stdlib.add(v1640, v1647);
        const v1649 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
        const v1650 = stdlib.le(v1648, v1649);
        const v1651 = v1650 ? v1648 : v1649;
        const v1654 = [v1637, v1651];
        sim_r.isHalt = false;
        }
      else {
        const v2592 = v1487[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
        const v2593 = stdlib.le(v1469, v1492);
        const v2594 = v2593 ? v1469 : v1492;
        let v2595;
        const v2596 = stdlib.ge(v1489, v2594);
        if (v2596) {
          v2595 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2597 = stdlib.sub(v2594, v1489);
          v2595 = v2597;
          }
        const v2599 = stdlib.mul(v2595, v1448);
        const v2600 = stdlib.add(v2592, v2599);
        const v2601 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
        const v2602 = stdlib.le(v2600, v2601);
        const v2603 = v2602 ? v2600 : v2601;
        const v2606 = v1487[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
        let v2609;
        if (v2596) {
          v2609 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2611 = stdlib.sub(v2594, v1489);
          v2609 = v2611;
          }
        const v2613 = stdlib.mul(v2609, v1450);
        const v2614 = stdlib.add(v2606, v2613);
        const v2615 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
        const v2616 = stdlib.le(v2614, v2615);
        const v2617 = v2616 ? v2614 : v2615;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc6, ctc5, ctc5, ctc1, ctc16, ctc1, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1454, time: v1453, didSend: v51, from: v1452 } = txn2;
  ;
  const v1457 = v1444[stdlib.checkedBigNumberify('./index.rsh:82:12:dot', stdlib.UInt_max, 0)];
  const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:82:12:dot', stdlib.UInt_max, 0)];
  const v1459 = stdlib.add(v1458, v1451);
  const v1462 = v1457[stdlib.checkedBigNumberify('./index.rsh:82:12:dot', stdlib.UInt_max, 1)];
  const v1463 = v1457[stdlib.checkedBigNumberify('./index.rsh:82:12:dot', stdlib.UInt_max, 2)];
  const v1464 = [v1459, v1462, v1463];
  const v1465 = stdlib.Array_set(v1444, stdlib.checkedBigNumberify('./index.rsh:82:12:dot', stdlib.UInt_max, 0), v1464);
  ;
  const v1466 = stdlib.addressEq(v1424, v1452);
  stdlib.assert(v1466, {
    at: './index.rsh:82:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v1468 = stdlib.add(v1428, stdlib.checkedBigNumberify('./index.rsh:87:39:decimal', stdlib.UInt_max, 2));
  const v1469 = stdlib.add(v1468, v1447);
  stdlib.protect(ctc0, await interact.readyForStakers(), {
    at: './index.rsh:118:36:application',
    fs: ['at ./index.rsh:118:36:application call to [unknown function] (defined at: ./index.rsh:118:36:function exp)', 'at ./index.rsh:118:36:application call to "liftedInteract" (defined at: ./index.rsh:118:36:application)'],
    msg: 'readyForStakers',
    who: 'Deployer'
    });
  
  const v1485 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
  const v1486 = [v1449, v1451];
  let v1487 = v1485;
  let v1488 = v1486;
  let v1489 = v1468;
  let v1490 = stdlib.checkedBigNumberify('./index.rsh:120:21:decimal', stdlib.UInt_max, 0);
  let v1491 = v1453;
  let v1492 = v1428;
  let v1497 = v1465;
  let v1498 = v1449;
  
  while (await (async () => {
    const v1621 = stdlib.eq(v1490, stdlib.checkedBigNumberify('./index.rsh:168:27:decimal', stdlib.UInt_max, 0));
    const v1623 = stdlib.le(v1492, v1469);
    const v1624 = v1621 ? v1623 : true;
    
    return v1624;})()) {
    const v1626 = v1487[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
    const v1627 = stdlib.le(v1469, v1492);
    const v1628 = v1627 ? v1469 : v1492;
    let v1629;
    const v1630 = stdlib.ge(v1489, v1628);
    if (v1630) {
      v1629 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v1631 = stdlib.sub(v1628, v1489);
      v1629 = v1631;
      }
    const v1633 = stdlib.mul(v1629, v1448);
    const v1634 = stdlib.add(v1626, v1633);
    const v1635 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
    const v1636 = stdlib.le(v1634, v1635);
    const v1637 = v1636 ? v1634 : v1635;
    const v1640 = v1487[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
    let v1643;
    if (v1630) {
      v1643 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
      }
    else {
      const v1645 = stdlib.sub(v1628, v1489);
      v1643 = v1645;
      }
    const v1647 = stdlib.mul(v1643, v1450);
    const v1648 = stdlib.add(v1640, v1647);
    const v1649 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
    const v1650 = stdlib.le(v1648, v1649);
    const v1651 = v1650 ? v1648 : v1649;
    const v1654 = [v1637, v1651];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc9],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1790], secs: v1792, time: v1791, didSend: v747, from: v1789 } = txn3;
    switch (v1790[0]) {
      case 'Staker_harvest0_576': {
        const v1793 = v1790[1];
        ;
        const v1829 = v1497[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
        const v1830 = v1829[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 0)];
        const v1834 = v1829[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
        const v1835 = v1829[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 2)];
        const v1836 = [v1830, v1834, v1835];
        const v1837 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1), v1836);
        ;
        undefined /* setApiDetails */;
        const v1839 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1789), null);
        const v1841 = {
          rewards: v1485,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
          };
        const v1842 = stdlib.fromSome(v1839, v1841);
        const v1843 = v1842.stake;
        const v1848 = v1842.rewards;
        const v1849 = v1848[stdlib.checkedBigNumberify('./index.rsh:139:54:array ref', stdlib.UInt_max, 0)];
        let v1854;
        if (v1630) {
          v1854 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1856 = stdlib.sub(v1628, v1489);
          v1854 = v1856;
          }
        const v1858 = stdlib.mul(v1854, v1448);
        const v1859 = stdlib.add(v1626, v1858);
        const v1861 = stdlib.le(v1859, v1635);
        const v1862 = v1861 ? v1859 : v1635;
        let v1865;
        const v1866 = stdlib.eq(v1490, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
        if (v1866) {
          v1865 = v1862;
          }
        else {
          const v1867 = stdlib.muldiv(v1862, v1843, v1490);
          v1865 = v1867;
          }
        let v1868;
        const v1869 = stdlib.ge(v1849, v1865);
        if (v1869) {
          v1868 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1870 = stdlib.sub(v1865, v1849);
          v1868 = v1870;
          }
        const v1871 = stdlib.le(v1868, v1637);
        const v1872 = v1871 ? v1868 : v1637;
        const v1884 = v1848[stdlib.checkedBigNumberify('./index.rsh:139:54:array ref', stdlib.UInt_max, 1)];
        let v1889;
        if (v1630) {
          v1889 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1891 = stdlib.sub(v1628, v1489);
          v1889 = v1891;
          }
        const v1893 = stdlib.mul(v1889, v1450);
        const v1894 = stdlib.add(v1640, v1893);
        const v1896 = stdlib.le(v1894, v1649);
        const v1897 = v1896 ? v1894 : v1649;
        let v1900;
        if (v1866) {
          v1900 = v1897;
          }
        else {
          const v1902 = stdlib.muldiv(v1897, v1843, v1490);
          v1900 = v1902;
          }
        let v1903;
        const v1904 = stdlib.ge(v1884, v1900);
        if (v1904) {
          v1903 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v1905 = stdlib.sub(v1900, v1884);
          v1903 = v1905;
          }
        const v1906 = stdlib.le(v1903, v1651);
        const v1907 = v1906 ? v1903 : v1651;
        const v1909 = [v1872, v1907];
        const v1918 = stdlib.sub(v1498, v1872);
        ;
        const v1919 = v1837[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 0)];
        const v1920 = v1919[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 0)];
        const v1924 = stdlib.sub(v1920, v1907);
        const v1927 = v1919[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 1)];
        const v1928 = v1919[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 2)];
        const v1929 = [v1924, v1927, v1928];
        const v1930 = stdlib.Array_set(v1837, stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 0), v1929);
        ;
        const v1932 = stdlib.sub(v1635, v1872);
        const v1934 = stdlib.sub(v1649, v1907);
        const v1947 = stdlib.add(v1849, v1872);
        const v1949 = stdlib.add(v1884, v1907);
        const v1950 = [v1947, v1949];
        const v1951 = {
          rewards: v1950,
          stake: v1843
          };
        await stdlib.mapSet(map0, v1789, v1951);
        const v1956 = [v1932, v1934];
        const v1957 = {
          totalRemaining: v1956,
          userReceived: v1909
          };
        await txn3.getOutput('Staker_harvest', 'v1957', ctc10, v1957);
        const v1963 = stdlib.sub(v1637, v1872);
        const v1964 = stdlib.sub(v1651, v1907);
        const v1966 = [v1963, v1964];
        const cv1487 = v1966;
        const cv1488 = v1956;
        const cv1489 = v1492;
        const cv1490 = v1490;
        const cv1491 = v1791;
        const cv1492 = v1491;
        const cv1497 = v1930;
        const cv1498 = v1918;
        
        v1487 = cv1487;
        v1488 = cv1488;
        v1489 = cv1489;
        v1490 = cv1490;
        v1491 = cv1491;
        v1492 = cv1492;
        v1497 = cv1497;
        v1498 = cv1498;
        
        continue;
        break;
        }
      case 'Staker_stake0_576': {
        const v2059 = v1790[1];
        const v2071 = v2059[stdlib.checkedBigNumberify('./index.rsh:169:9:spread', stdlib.UInt_max, 0)];
        ;
        const v2095 = v1497[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
        const v2096 = v2095[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 0)];
        const v2097 = stdlib.add(v2096, v2071);
        const v2100 = v2095[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
        const v2101 = v2095[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 2)];
        const v2102 = [v2097, v2100, v2101];
        const v2103 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1), v2102);
        ;
        undefined /* setApiDetails */;
        const v2238 = stdlib.add(v1490, v2071);
        const v2239 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1789), null);
        const v2241 = {
          rewards: v1485,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
          };
        const v2242 = stdlib.fromSome(v2239, v2241);
        const v2243 = v2242.stake;
        const v2244 = stdlib.add(v2243, v2071);
        const v2249 = v2242.rewards;
        let v2250;
        const v2251 = stdlib.eq(v2238, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
        if (v2251) {
          v2250 = v1637;
          }
        else {
          const v2252 = stdlib.muldiv(v1637, v2071, v2238);
          v2250 = v2252;
          }
        const v2253 = v2249[stdlib.checkedBigNumberify('./index.rsh:178:29:array ref', stdlib.UInt_max, 0)];
        const v2254 = stdlib.add(v2253, v2250);
        let v2255;
        if (v2251) {
          v2255 = v1651;
          }
        else {
          const v2257 = stdlib.muldiv(v1651, v2071, v2238);
          v2255 = v2257;
          }
        const v2258 = v2249[stdlib.checkedBigNumberify('./index.rsh:178:29:array ref', stdlib.UInt_max, 1)];
        const v2259 = stdlib.add(v2258, v2255);
        const v2260 = [v2254, v2259];
        const v2261 = {
          rewards: v2260,
          stake: v2244
          };
        await stdlib.mapSet(map0, v1789, v2261);
        const v2262 = {
          newEveryoneStaked: v2238,
          newUserStaked: v2244
          };
        await txn3.getOutput('Staker_stake', 'v2262', ctc11, v2262);
        const cv1487 = v1654;
        const cv1488 = v1488;
        const cv1489 = v1492;
        const cv1490 = v2238;
        const cv1491 = v1791;
        const cv1492 = v1491;
        const cv1497 = v2103;
        const cv1498 = v1498;
        
        v1487 = cv1487;
        v1488 = cv1488;
        v1489 = cv1489;
        v1490 = cv1490;
        v1491 = cv1491;
        v1492 = cv1492;
        v1497 = cv1497;
        v1498 = cv1498;
        
        continue;
        break;
        }
      case 'Staker_withdraw0_576': {
        const v2325 = v1790[1];
        ;
        const v2361 = v1497[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
        const v2362 = v2361[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 0)];
        const v2366 = v2361[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
        const v2367 = v2361[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 2)];
        const v2368 = [v2362, v2366, v2367];
        const v2369 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1), v2368);
        ;
        undefined /* setApiDetails */;
        const v2538 = v2325[stdlib.checkedBigNumberify('./index.rsh:190:9:spread', stdlib.UInt_max, 0)];
        const v2539 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1789), null);
        const v2541 = {
          rewards: v1485,
          stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
          };
        const v2542 = stdlib.fromSome(v2539, v2541);
        const v2543 = v2542.stake;
        const v2545 = stdlib.le(v2538, v2543);
        stdlib.assert(v2545, {
          at: './index.rsh:196:16:application',
          fs: ['at ./index.rsh:193:7:application call to [unknown function] (defined at: ./index.rsh:193:7:function exp)'],
          msg: null,
          who: 'Deployer'
          });
        const v2546 = v2369[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 1)];
        const v2547 = v2546[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 0)];
        const v2551 = stdlib.sub(v2547, v2538);
        const v2554 = v2546[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 1)];
        const v2555 = v2546[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 2)];
        const v2556 = [v2551, v2554, v2555];
        const v2557 = stdlib.Array_set(v2369, stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 1), v2556);
        ;
        const v2558 = stdlib.sub(v1490, v2538);
        const v2559 = stdlib.sub(v2543, v2538);
        const v2564 = v2542.rewards;
        const v2565 = v2564[stdlib.checkedBigNumberify('./index.rsh:205:50:array ref', stdlib.UInt_max, 0)];
        let v2566;
        const v2567 = stdlib.eq(v2558, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
        if (v2567) {
          v2566 = v1637;
          }
        else {
          const v2568 = stdlib.muldiv(v1637, v2538, v2558);
          v2566 = v2568;
          }
        let v2569;
        const v2570 = stdlib.ge(v2566, v2565);
        if (v2570) {
          v2569 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2571 = stdlib.sub(v2565, v2566);
          v2569 = v2571;
          }
        const v2572 = v2564[stdlib.checkedBigNumberify('./index.rsh:205:50:array ref', stdlib.UInt_max, 1)];
        let v2573;
        if (v2567) {
          v2573 = v1651;
          }
        else {
          const v2575 = stdlib.muldiv(v1651, v2538, v2558);
          v2573 = v2575;
          }
        let v2576;
        const v2577 = stdlib.ge(v2573, v2572);
        if (v2577) {
          v2576 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v2578 = stdlib.sub(v2572, v2573);
          v2576 = v2578;
          }
        const v2579 = [v2569, v2576];
        const v2580 = {
          rewards: v2579,
          stake: v2559
          };
        await stdlib.mapSet(map0, v1789, v2580);
        const v2582 = {
          newEveryoneStaked: v2558,
          newUserStaked: v2559
          };
        await txn3.getOutput('Staker_withdraw', 'v2582', ctc11, v2582);
        const cv1487 = v1654;
        const cv1488 = v1488;
        const cv1489 = v1492;
        const cv1490 = v2558;
        const cv1491 = v1791;
        const cv1492 = v1491;
        const cv1497 = v2557;
        const cv1498 = v1498;
        
        v1487 = cv1487;
        v1488 = cv1488;
        v1489 = cv1489;
        v1490 = cv1490;
        v1491 = cv1491;
        v1492 = cv1492;
        v1497 = cv1497;
        v1498 = cv1498;
        
        continue;
        break;
        }
      }
    
    }
  const v2592 = v1487[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
  const v2593 = stdlib.le(v1469, v1492);
  const v2594 = v2593 ? v1469 : v1492;
  let v2595;
  const v2596 = stdlib.ge(v1489, v2594);
  if (v2596) {
    v2595 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v2597 = stdlib.sub(v2594, v1489);
    v2595 = v2597;
    }
  const v2599 = stdlib.mul(v2595, v1448);
  const v2600 = stdlib.add(v2592, v2599);
  const v2601 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
  const v2602 = stdlib.le(v2600, v2601);
  const v2603 = v2602 ? v2600 : v2601;
  const v2606 = v1487[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
  let v2609;
  if (v2596) {
    v2609 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
    }
  else {
    const v2611 = stdlib.sub(v2594, v1489);
    v2609 = v2611;
    }
  const v2613 = stdlib.mul(v2609, v1450);
  const v2614 = stdlib.add(v2606, v2613);
  const v2615 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
  const v2616 = stdlib.le(v2614, v2615);
  const v2617 = v2616 ? v2614 : v2615;
  const v2698 = ['Deployer0_1144', null];
  
  const txn3 = await (ctc.sendrecv({
    args: [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1497, v1498, v2592, v2601, v2603, v2606, v2615, v2617, v2698],
    evt_cnt: 1,
    funcNum: 3,
    lct: v1491,
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./index.rsh:249:39:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2710], secs: v2712, time: v2711, didSend: v1196, from: v2709 } = txn3;
      
      switch (v2710[0]) {
        case 'Any_halt0_1144': {
          const v2713 = v2710[1];
          ;
          undefined /* setApiDetails */;
          const v2720 = null;
          await txn3.getOutput('Any_halt', 'v2720', ctc0, v2720);
          sim_r.txns.push({
            amt: v1498,
            kind: 'from',
            to: v1424,
            tok: undefined /* Nothing */
            });
          const v2731 = v1497[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
          const v2732 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
          const v2738 = stdlib.sub(v2732, v2732);
          const v2741 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 1)];
          const v2742 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 2)];
          const v2743 = [v2738, v2741, v2742];
          const v2744 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 0), v2743);
          sim_r.txns.push({
            amt: v2732,
            kind: 'from',
            to: v1424,
            tok: v1426
            });
          const v2745 = v2744[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 1)];
          const v2746 = v2745[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: v2746,
            kind: 'from',
            to: v1424,
            tok: v1427
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v1427
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v1426
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Deployer0_1144': {
          const v2810 = v2710[1];
          ;
          const v2865 = stdlib.addressEq(v2709, v1424);
          ;
          sim_r.txns.push({
            amt: v1498,
            kind: 'from',
            to: v1424,
            tok: undefined /* Nothing */
            });
          const v2871 = v1497[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
          const v2872 = v2871[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
          const v2878 = stdlib.sub(v2872, v2872);
          const v2881 = v2871[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 1)];
          const v2882 = v2871[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 2)];
          const v2883 = [v2878, v2881, v2882];
          const v2884 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 0), v2883);
          sim_r.txns.push({
            amt: v2872,
            kind: 'from',
            to: v1424,
            tok: v1426
            });
          const v2885 = v2884[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 1)];
          const v2886 = v2885[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: v2886,
            kind: 'from',
            to: v1424,
            tok: v1427
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v1427
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: v1426
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc6, ctc5, ctc5, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc16, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v2710], secs: v2712, time: v2711, didSend: v1196, from: v2709 } = txn3;
  switch (v2710[0]) {
    case 'Any_halt0_1144': {
      const v2713 = v2710[1];
      ;
      undefined /* setApiDetails */;
      const v2720 = null;
      await txn3.getOutput('Any_halt', 'v2720', ctc0, v2720);
      ;
      const v2731 = v1497[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
      const v2732 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
      const v2738 = stdlib.sub(v2732, v2732);
      const v2741 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 1)];
      const v2742 = v2731[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 2)];
      const v2743 = [v2738, v2741, v2742];
      const v2744 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 0), v2743);
      ;
      const v2745 = v2744[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 1)];
      const v2746 = v2745[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 0)];
      ;
      return;
      
      break;
      }
    case 'Deployer0_1144': {
      const v2810 = v2710[1];
      ;
      const v2865 = stdlib.addressEq(v2709, v1424);
      stdlib.assert(v2865, {
        at: './index.rsh:248:7:application',
        fs: [],
        msg: null,
        who: 'Deployer'
        });
      ;
      const v2871 = v1497[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
      const v2872 = v2871[stdlib.checkedBigNumberify('./index.rsh:254:21:application', stdlib.UInt_max, 0)];
      const v2878 = stdlib.sub(v2872, v2872);
      const v2881 = v2871[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 1)];
      const v2882 = v2871[stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 2)];
      const v2883 = [v2878, v2881, v2882];
      const v2884 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:254:55:application', stdlib.UInt_max, 0), v2883);
      ;
      const v2885 = v2884[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 1)];
      const v2886 = v2885[stdlib.checkedBigNumberify('./index.rsh:256:21:application', stdlib.UInt_max, 0)];
      ;
      return;
      
      break;
      }
    }
  
  
  
  
  
  };
export async function Staker_harvest(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_harvest expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['duration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Staker_harvest0_576: ctc11,
    Staker_stake0_576: ctc12,
    Staker_withdraw0_576: ctc12
    });
  const ctc14 = stdlib.T_Struct([['userReceived', ctc2], ['totalRemaining', ctc2]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v1752 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:217:9:application call to [unknown function] (defined at: ./index.rsh:217:9:function exp)', 'at ./index.rsh:120:19:application call to "runStaker_harvest0_576" (defined at: ./index.rsh:217:9:function exp)', 'at ./index.rsh:120:19:application call to [unknown function] (defined at: ./index.rsh:120:19:function exp)'],
    msg: 'in',
    who: 'Staker_harvest'
    });
  const v1755 = ['Staker_harvest0_576', v1752];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654, v1755],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:218:15:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:218:19:decimal', stdlib.UInt_max, 0), v1427]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1790], secs: v1792, time: v1791, didSend: v747, from: v1789 } = txn1;
      
      switch (v1790[0]) {
        case 'Staker_harvest0_576': {
          const v1793 = v1790[1];
          ;
          const v1829 = v1497[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
          const v1830 = v1829[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 0)];
          const v1834 = v1829[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
          const v1835 = v1829[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 2)];
          const v1836 = [v1830, v1834, v1835];
          const v1837 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1), v1836);
          ;
          undefined /* setApiDetails */;
          const v1839 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1789), null);
          const v1841 = {
            rewards: v1485,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
            };
          const v1842 = stdlib.fromSome(v1839, v1841);
          const v1843 = v1842.stake;
          const v1848 = v1842.rewards;
          const v1849 = v1848[stdlib.checkedBigNumberify('./index.rsh:139:54:array ref', stdlib.UInt_max, 0)];
          let v1854;
          if (v1630) {
            v1854 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1856 = stdlib.sub(v1628, v1489);
            v1854 = v1856;
            }
          const v1858 = stdlib.mul(v1854, v1448);
          const v1859 = stdlib.add(v1626, v1858);
          const v1861 = stdlib.le(v1859, v1635);
          const v1862 = v1861 ? v1859 : v1635;
          let v1865;
          const v1866 = stdlib.eq(v1490, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
          if (v1866) {
            v1865 = v1862;
            }
          else {
            const v1867 = stdlib.muldiv(v1862, v1843, v1490);
            v1865 = v1867;
            }
          let v1868;
          const v1869 = stdlib.ge(v1849, v1865);
          if (v1869) {
            v1868 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1870 = stdlib.sub(v1865, v1849);
            v1868 = v1870;
            }
          const v1871 = stdlib.le(v1868, v1637);
          const v1872 = v1871 ? v1868 : v1637;
          const v1884 = v1848[stdlib.checkedBigNumberify('./index.rsh:139:54:array ref', stdlib.UInt_max, 1)];
          let v1889;
          if (v1630) {
            v1889 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1891 = stdlib.sub(v1628, v1489);
            v1889 = v1891;
            }
          const v1893 = stdlib.mul(v1889, v1450);
          const v1894 = stdlib.add(v1640, v1893);
          const v1896 = stdlib.le(v1894, v1649);
          const v1897 = v1896 ? v1894 : v1649;
          let v1900;
          if (v1866) {
            v1900 = v1897;
            }
          else {
            const v1902 = stdlib.muldiv(v1897, v1843, v1490);
            v1900 = v1902;
            }
          let v1903;
          const v1904 = stdlib.ge(v1884, v1900);
          if (v1904) {
            v1903 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v1905 = stdlib.sub(v1900, v1884);
            v1903 = v1905;
            }
          const v1906 = stdlib.le(v1903, v1651);
          const v1907 = v1906 ? v1903 : v1651;
          const v1909 = [v1872, v1907];
          const v1918 = stdlib.sub(v1498, v1872);
          sim_r.txns.push({
            amt: v1872,
            kind: 'from',
            to: v1789,
            tok: undefined /* Nothing */
            });
          const v1919 = v1837[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 0)];
          const v1920 = v1919[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 0)];
          const v1924 = stdlib.sub(v1920, v1907);
          const v1927 = v1919[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 1)];
          const v1928 = v1919[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 2)];
          const v1929 = [v1924, v1927, v1928];
          const v1930 = stdlib.Array_set(v1837, stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 0), v1929);
          sim_r.txns.push({
            amt: v1907,
            kind: 'from',
            to: v1789,
            tok: v1426
            });
          const v1932 = stdlib.sub(v1635, v1872);
          const v1934 = stdlib.sub(v1649, v1907);
          const v1947 = stdlib.add(v1849, v1872);
          const v1949 = stdlib.add(v1884, v1907);
          const v1950 = [v1947, v1949];
          const v1951 = {
            rewards: v1950,
            stake: v1843
            };
          await stdlib.simMapSet(sim_r, 0, v1789, v1951);
          const v1956 = [v1932, v1934];
          const v1957 = {
            totalRemaining: v1956,
            userReceived: v1909
            };
          const v1958 = await txn1.getOutput('Staker_harvest', 'v1957', ctc14, v1957);
          
          const v1963 = stdlib.sub(v1637, v1872);
          const v1964 = stdlib.sub(v1651, v1907);
          const v4960 = v1956;
          const v4961 = v1492;
          const v4962 = v1490;
          const v4963 = v1791;
          const v4964 = v1491;
          const v4965 = v1930;
          const v4966 = v1918;
          const v4968 = stdlib.le(v1491, v1469);
          const v4969 = v1866 ? v4968 : true;
          if (v4969) {
            const v4970 = v1963;
            const v4971 = stdlib.le(v1469, v1491);
            const v4972 = v4971 ? v1469 : v1491;
            let v4973;
            const v4974 = stdlib.ge(v1492, v4972);
            if (v4974) {
              v4973 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v4975 = stdlib.sub(v4972, v1492);
              v4973 = v4975;
              }
            const v4976 = stdlib.mul(v4973, v1448);
            const v4977 = stdlib.add(v1963, v4976);
            const v4978 = v1932;
            const v4979 = stdlib.le(v4977, v1932);
            const v4980 = v4979 ? v4977 : v1932;
            const v4981 = v1964;
            let v4982;
            if (v4974) {
              v4982 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v4983 = stdlib.sub(v4972, v1492);
              v4982 = v4983;
              }
            const v4984 = stdlib.mul(v4982, v1450);
            const v4985 = stdlib.add(v1964, v4984);
            const v4986 = v1934;
            const v4987 = stdlib.le(v4985, v1934);
            const v4988 = v4987 ? v4985 : v1934;
            const v4989 = [v4980, v4988];
            sim_r.isHalt = false;
            }
          else {
            const v4990 = v1963;
            const v4991 = stdlib.le(v1469, v1491);
            const v4992 = v4991 ? v1469 : v1491;
            let v4993;
            const v4994 = stdlib.ge(v1492, v4992);
            if (v4994) {
              v4993 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v4995 = stdlib.sub(v4992, v1492);
              v4993 = v4995;
              }
            const v4996 = stdlib.mul(v4993, v1448);
            const v4997 = stdlib.add(v1963, v4996);
            const v4998 = v1932;
            const v4999 = stdlib.le(v4997, v1932);
            const v5000 = v4999 ? v4997 : v1932;
            const v5001 = v1964;
            let v5002;
            if (v4994) {
              v5002 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v5003 = stdlib.sub(v4992, v1492);
              v5002 = v5003;
              }
            const v5004 = stdlib.mul(v5002, v1450);
            const v5005 = stdlib.add(v1964, v5004);
            const v5006 = v1934;
            const v5007 = stdlib.le(v5005, v1934);
            const v5008 = v5007 ? v5005 : v1934;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_stake0_576': {
          const v2059 = v1790[1];
          
          break;
          }
        case 'Staker_withdraw0_576': {
          const v2325 = v1790[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1790], secs: v1792, time: v1791, didSend: v747, from: v1789 } = txn1;
  switch (v1790[0]) {
    case 'Staker_harvest0_576': {
      const v1793 = v1790[1];
      ;
      const v1829 = v1497[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
      const v1830 = v1829[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 0)];
      const v1834 = v1829[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
      const v1835 = v1829[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 2)];
      const v1836 = [v1830, v1834, v1835];
      const v1837 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1), v1836);
      ;
      undefined /* setApiDetails */;
      const v1839 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1789), null);
      const v1841 = {
        rewards: v1485,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
        };
      const v1842 = stdlib.fromSome(v1839, v1841);
      const v1843 = v1842.stake;
      const v1848 = v1842.rewards;
      const v1849 = v1848[stdlib.checkedBigNumberify('./index.rsh:139:54:array ref', stdlib.UInt_max, 0)];
      let v1854;
      if (v1630) {
        v1854 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1856 = stdlib.sub(v1628, v1489);
        v1854 = v1856;
        }
      const v1858 = stdlib.mul(v1854, v1448);
      const v1859 = stdlib.add(v1626, v1858);
      const v1861 = stdlib.le(v1859, v1635);
      const v1862 = v1861 ? v1859 : v1635;
      let v1865;
      const v1866 = stdlib.eq(v1490, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
      if (v1866) {
        v1865 = v1862;
        }
      else {
        const v1867 = stdlib.muldiv(v1862, v1843, v1490);
        v1865 = v1867;
        }
      let v1868;
      const v1869 = stdlib.ge(v1849, v1865);
      if (v1869) {
        v1868 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1870 = stdlib.sub(v1865, v1849);
        v1868 = v1870;
        }
      const v1871 = stdlib.le(v1868, v1637);
      const v1872 = v1871 ? v1868 : v1637;
      const v1884 = v1848[stdlib.checkedBigNumberify('./index.rsh:139:54:array ref', stdlib.UInt_max, 1)];
      let v1889;
      if (v1630) {
        v1889 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1891 = stdlib.sub(v1628, v1489);
        v1889 = v1891;
        }
      const v1893 = stdlib.mul(v1889, v1450);
      const v1894 = stdlib.add(v1640, v1893);
      const v1896 = stdlib.le(v1894, v1649);
      const v1897 = v1896 ? v1894 : v1649;
      let v1900;
      if (v1866) {
        v1900 = v1897;
        }
      else {
        const v1902 = stdlib.muldiv(v1897, v1843, v1490);
        v1900 = v1902;
        }
      let v1903;
      const v1904 = stdlib.ge(v1884, v1900);
      if (v1904) {
        v1903 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v1905 = stdlib.sub(v1900, v1884);
        v1903 = v1905;
        }
      const v1906 = stdlib.le(v1903, v1651);
      const v1907 = v1906 ? v1903 : v1651;
      const v1909 = [v1872, v1907];
      const v1918 = stdlib.sub(v1498, v1872);
      ;
      const v1919 = v1837[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 0)];
      const v1920 = v1919[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 0)];
      const v1924 = stdlib.sub(v1920, v1907);
      const v1927 = v1919[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 1)];
      const v1928 = v1919[stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 2)];
      const v1929 = [v1924, v1927, v1928];
      const v1930 = stdlib.Array_set(v1837, stdlib.checkedBigNumberify('./index.rsh:223:56:application', stdlib.UInt_max, 0), v1929);
      ;
      const v1932 = stdlib.sub(v1635, v1872);
      const v1934 = stdlib.sub(v1649, v1907);
      const v1947 = stdlib.add(v1849, v1872);
      const v1949 = stdlib.add(v1884, v1907);
      const v1950 = [v1947, v1949];
      const v1951 = {
        rewards: v1950,
        stake: v1843
        };
      await stdlib.mapSet(map0, v1789, v1951);
      const v1956 = [v1932, v1934];
      const v1957 = {
        totalRemaining: v1956,
        userReceived: v1909
        };
      const v1958 = await txn1.getOutput('Staker_harvest', 'v1957', ctc14, v1957);
      if (v747) {
        stdlib.protect(ctc0, await interact.out(v1793, v1958), {
          at: './index.rsh:217:10:application',
          fs: ['at ./index.rsh:217:10:application call to [unknown function] (defined at: ./index.rsh:217:10:function exp)', 'at ./index.rsh:238:10:application call to "k" (defined at: ./index.rsh:219:7:function exp)', 'at ./index.rsh:219:7:application call to [unknown function] (defined at: ./index.rsh:219:7:function exp)'],
          msg: 'out',
          who: 'Staker_harvest'
          });
        }
      else {
        }
      
      const v1963 = stdlib.sub(v1637, v1872);
      const v1964 = stdlib.sub(v1651, v1907);
      const v4960 = v1956;
      const v4961 = v1492;
      const v4962 = v1490;
      const v4963 = v1791;
      const v4964 = v1491;
      const v4965 = v1930;
      const v4966 = v1918;
      const v4968 = stdlib.le(v1491, v1469);
      const v4969 = v1866 ? v4968 : true;
      if (v4969) {
        const v4970 = v1963;
        const v4971 = stdlib.le(v1469, v1491);
        const v4972 = v4971 ? v1469 : v1491;
        let v4973;
        const v4974 = stdlib.ge(v1492, v4972);
        if (v4974) {
          v4973 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v4975 = stdlib.sub(v4972, v1492);
          v4973 = v4975;
          }
        const v4976 = stdlib.mul(v4973, v1448);
        const v4977 = stdlib.add(v1963, v4976);
        const v4978 = v1932;
        const v4979 = stdlib.le(v4977, v1932);
        const v4980 = v4979 ? v4977 : v1932;
        const v4981 = v1964;
        let v4982;
        if (v4974) {
          v4982 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v4983 = stdlib.sub(v4972, v1492);
          v4982 = v4983;
          }
        const v4984 = stdlib.mul(v4982, v1450);
        const v4985 = stdlib.add(v1964, v4984);
        const v4986 = v1934;
        const v4987 = stdlib.le(v4985, v1934);
        const v4988 = v4987 ? v4985 : v1934;
        const v4989 = [v4980, v4988];
        return;
        }
      else {
        const v4990 = v1963;
        const v4991 = stdlib.le(v1469, v1491);
        const v4992 = v4991 ? v1469 : v1491;
        let v4993;
        const v4994 = stdlib.ge(v1492, v4992);
        if (v4994) {
          v4993 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v4995 = stdlib.sub(v4992, v1492);
          v4993 = v4995;
          }
        const v4996 = stdlib.mul(v4993, v1448);
        const v4997 = stdlib.add(v1963, v4996);
        const v4998 = v1932;
        const v4999 = stdlib.le(v4997, v1932);
        const v5000 = v4999 ? v4997 : v1932;
        const v5001 = v1964;
        let v5002;
        if (v4994) {
          v5002 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v5003 = stdlib.sub(v4992, v1492);
          v5002 = v5003;
          }
        const v5004 = stdlib.mul(v5002, v1450);
        const v5005 = stdlib.add(v1964, v5004);
        const v5006 = v1934;
        const v5007 = stdlib.le(v5005, v1934);
        const v5008 = v5007 ? v5005 : v1934;
        return;
        }
      break;
      }
    case 'Staker_stake0_576': {
      const v2059 = v1790[1];
      return;
      break;
      }
    case 'Staker_withdraw0_576': {
      const v2325 = v1790[1];
      return;
      break;
      }
    }
  
  
  };
export async function Staker_stake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_stake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['duration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Staker_harvest0_576: ctc12,
    Staker_stake0_576: ctc11,
    Staker_withdraw0_576: ctc11
    });
  const ctc14 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v1731 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:169:9:application call to [unknown function] (defined at: ./index.rsh:169:9:function exp)', 'at ./index.rsh:120:19:application call to "runStaker_stake0_576" (defined at: ./index.rsh:169:9:function exp)', 'at ./index.rsh:120:19:application call to [unknown function] (defined at: ./index.rsh:120:19:function exp)'],
    msg: 'in',
    who: 'Staker_stake'
    });
  const v1732 = v1731[stdlib.checkedBigNumberify('./index.rsh:169:9:spread', stdlib.UInt_max, 0)];
  const v1735 = ['Staker_stake0_576', v1731];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654, v1735],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:170:18:decimal', stdlib.UInt_max, 0), [[v1732, v1427]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1790], secs: v1792, time: v1791, didSend: v747, from: v1789 } = txn1;
      
      switch (v1790[0]) {
        case 'Staker_harvest0_576': {
          const v1793 = v1790[1];
          
          break;
          }
        case 'Staker_stake0_576': {
          const v2059 = v1790[1];
          const v2071 = v2059[stdlib.checkedBigNumberify('./index.rsh:169:9:spread', stdlib.UInt_max, 0)];
          ;
          const v2095 = v1497[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
          const v2096 = v2095[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 0)];
          const v2097 = stdlib.add(v2096, v2071);
          const v2100 = v2095[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
          const v2101 = v2095[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 2)];
          const v2102 = [v2097, v2100, v2101];
          const v2103 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1), v2102);
          sim_r.txns.push({
            amt: v2071,
            kind: 'to',
            tok: v1427
            });
          undefined /* setApiDetails */;
          const v2238 = stdlib.add(v1490, v2071);
          const v2239 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1789), null);
          const v2241 = {
            rewards: v1485,
            stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
            };
          const v2242 = stdlib.fromSome(v2239, v2241);
          const v2243 = v2242.stake;
          const v2244 = stdlib.add(v2243, v2071);
          const v2249 = v2242.rewards;
          let v2250;
          const v2251 = stdlib.eq(v2238, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
          if (v2251) {
            v2250 = v1637;
            }
          else {
            const v2252 = stdlib.muldiv(v1637, v2071, v2238);
            v2250 = v2252;
            }
          const v2253 = v2249[stdlib.checkedBigNumberify('./index.rsh:178:29:array ref', stdlib.UInt_max, 0)];
          const v2254 = stdlib.add(v2253, v2250);
          let v2255;
          if (v2251) {
            v2255 = v1651;
            }
          else {
            const v2257 = stdlib.muldiv(v1651, v2071, v2238);
            v2255 = v2257;
            }
          const v2258 = v2249[stdlib.checkedBigNumberify('./index.rsh:178:29:array ref', stdlib.UInt_max, 1)];
          const v2259 = stdlib.add(v2258, v2255);
          const v2260 = [v2254, v2259];
          const v2261 = {
            rewards: v2260,
            stake: v2244
            };
          await stdlib.simMapSet(sim_r, 0, v1789, v2261);
          const v2262 = {
            newEveryoneStaked: v2238,
            newUserStaked: v2244
            };
          const v2263 = await txn1.getOutput('Staker_stake', 'v2262', ctc14, v2262);
          
          const v5272 = v1488;
          const v5273 = v1492;
          const v5274 = v2238;
          const v5275 = v1791;
          const v5276 = v1491;
          const v5277 = v2103;
          const v5278 = v1498;
          const v5280 = stdlib.le(v1491, v1469);
          const v5281 = v2251 ? v5280 : true;
          if (v5281) {
            const v5282 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
            const v5283 = stdlib.le(v1469, v1491);
            const v5284 = v5283 ? v1469 : v1491;
            let v5285;
            const v5286 = stdlib.ge(v1492, v5284);
            if (v5286) {
              v5285 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v5287 = stdlib.sub(v5284, v1492);
              v5285 = v5287;
              }
            const v5288 = stdlib.mul(v5285, v1448);
            const v5289 = stdlib.add(v5282, v5288);
            const v5290 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
            const v5291 = stdlib.le(v5289, v5290);
            const v5292 = v5291 ? v5289 : v5290;
            const v5293 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
            let v5294;
            if (v5286) {
              v5294 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v5295 = stdlib.sub(v5284, v1492);
              v5294 = v5295;
              }
            const v5296 = stdlib.mul(v5294, v1450);
            const v5297 = stdlib.add(v5293, v5296);
            const v5298 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
            const v5299 = stdlib.le(v5297, v5298);
            const v5300 = v5299 ? v5297 : v5298;
            const v5301 = [v5292, v5300];
            sim_r.isHalt = false;
            }
          else {
            const v5302 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
            const v5303 = stdlib.le(v1469, v1491);
            const v5304 = v5303 ? v1469 : v1491;
            let v5305;
            const v5306 = stdlib.ge(v1492, v5304);
            if (v5306) {
              v5305 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v5307 = stdlib.sub(v5304, v1492);
              v5305 = v5307;
              }
            const v5308 = stdlib.mul(v5305, v1448);
            const v5309 = stdlib.add(v5302, v5308);
            const v5310 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
            const v5311 = stdlib.le(v5309, v5310);
            const v5312 = v5311 ? v5309 : v5310;
            const v5313 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
            let v5314;
            if (v5306) {
              v5314 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v5315 = stdlib.sub(v5304, v1492);
              v5314 = v5315;
              }
            const v5316 = stdlib.mul(v5314, v1450);
            const v5317 = stdlib.add(v5313, v5316);
            const v5318 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
            const v5319 = stdlib.le(v5317, v5318);
            const v5320 = v5319 ? v5317 : v5318;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Staker_withdraw0_576': {
          const v2325 = v1790[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1790], secs: v1792, time: v1791, didSend: v747, from: v1789 } = txn1;
  switch (v1790[0]) {
    case 'Staker_harvest0_576': {
      const v1793 = v1790[1];
      return;
      break;
      }
    case 'Staker_stake0_576': {
      const v2059 = v1790[1];
      const v2071 = v2059[stdlib.checkedBigNumberify('./index.rsh:169:9:spread', stdlib.UInt_max, 0)];
      ;
      const v2095 = v1497[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
      const v2096 = v2095[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 0)];
      const v2097 = stdlib.add(v2096, v2071);
      const v2100 = v2095[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
      const v2101 = v2095[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 2)];
      const v2102 = [v2097, v2100, v2101];
      const v2103 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1), v2102);
      ;
      undefined /* setApiDetails */;
      const v2238 = stdlib.add(v1490, v2071);
      const v2239 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1789), null);
      const v2241 = {
        rewards: v1485,
        stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
        };
      const v2242 = stdlib.fromSome(v2239, v2241);
      const v2243 = v2242.stake;
      const v2244 = stdlib.add(v2243, v2071);
      const v2249 = v2242.rewards;
      let v2250;
      const v2251 = stdlib.eq(v2238, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
      if (v2251) {
        v2250 = v1637;
        }
      else {
        const v2252 = stdlib.muldiv(v1637, v2071, v2238);
        v2250 = v2252;
        }
      const v2253 = v2249[stdlib.checkedBigNumberify('./index.rsh:178:29:array ref', stdlib.UInt_max, 0)];
      const v2254 = stdlib.add(v2253, v2250);
      let v2255;
      if (v2251) {
        v2255 = v1651;
        }
      else {
        const v2257 = stdlib.muldiv(v1651, v2071, v2238);
        v2255 = v2257;
        }
      const v2258 = v2249[stdlib.checkedBigNumberify('./index.rsh:178:29:array ref', stdlib.UInt_max, 1)];
      const v2259 = stdlib.add(v2258, v2255);
      const v2260 = [v2254, v2259];
      const v2261 = {
        rewards: v2260,
        stake: v2244
        };
      await stdlib.mapSet(map0, v1789, v2261);
      const v2262 = {
        newEveryoneStaked: v2238,
        newUserStaked: v2244
        };
      const v2263 = await txn1.getOutput('Staker_stake', 'v2262', ctc14, v2262);
      if (v747) {
        stdlib.protect(ctc0, await interact.out(v2059, v2263), {
          at: './index.rsh:169:10:application',
          fs: ['at ./index.rsh:169:10:application call to [unknown function] (defined at: ./index.rsh:169:10:function exp)', 'at ./index.rsh:187:10:application call to "k" (defined at: ./index.rsh:171:7:function exp)', 'at ./index.rsh:171:7:application call to [unknown function] (defined at: ./index.rsh:171:7:function exp)'],
          msg: 'out',
          who: 'Staker_stake'
          });
        }
      else {
        }
      
      const v5272 = v1488;
      const v5273 = v1492;
      const v5274 = v2238;
      const v5275 = v1791;
      const v5276 = v1491;
      const v5277 = v2103;
      const v5278 = v1498;
      const v5280 = stdlib.le(v1491, v1469);
      const v5281 = v2251 ? v5280 : true;
      if (v5281) {
        const v5282 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
        const v5283 = stdlib.le(v1469, v1491);
        const v5284 = v5283 ? v1469 : v1491;
        let v5285;
        const v5286 = stdlib.ge(v1492, v5284);
        if (v5286) {
          v5285 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v5287 = stdlib.sub(v5284, v1492);
          v5285 = v5287;
          }
        const v5288 = stdlib.mul(v5285, v1448);
        const v5289 = stdlib.add(v5282, v5288);
        const v5290 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
        const v5291 = stdlib.le(v5289, v5290);
        const v5292 = v5291 ? v5289 : v5290;
        const v5293 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
        let v5294;
        if (v5286) {
          v5294 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v5295 = stdlib.sub(v5284, v1492);
          v5294 = v5295;
          }
        const v5296 = stdlib.mul(v5294, v1450);
        const v5297 = stdlib.add(v5293, v5296);
        const v5298 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
        const v5299 = stdlib.le(v5297, v5298);
        const v5300 = v5299 ? v5297 : v5298;
        const v5301 = [v5292, v5300];
        return;
        }
      else {
        const v5302 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
        const v5303 = stdlib.le(v1469, v1491);
        const v5304 = v5303 ? v1469 : v1491;
        let v5305;
        const v5306 = stdlib.ge(v1492, v5304);
        if (v5306) {
          v5305 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v5307 = stdlib.sub(v5304, v1492);
          v5305 = v5307;
          }
        const v5308 = stdlib.mul(v5305, v1448);
        const v5309 = stdlib.add(v5302, v5308);
        const v5310 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
        const v5311 = stdlib.le(v5309, v5310);
        const v5312 = v5311 ? v5309 : v5310;
        const v5313 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
        let v5314;
        if (v5306) {
          v5314 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v5315 = stdlib.sub(v5304, v1492);
          v5314 = v5315;
          }
        const v5316 = stdlib.mul(v5314, v1450);
        const v5317 = stdlib.add(v5313, v5316);
        const v5318 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
        const v5319 = stdlib.le(v5317, v5318);
        const v5320 = v5319 ? v5317 : v5318;
        return;
        }
      break;
      }
    case 'Staker_withdraw0_576': {
      const v2325 = v1790[1];
      return;
      break;
      }
    }
  
  
  };
export async function Staker_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Staker_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Object({
    rewards: ctc2,
    stake: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Struct([['rewardToken1', ctc6], ['stakeToken', ctc6], ['rewardsPerBlock', ctc2], ['duration', ctc1]]);
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Staker_harvest0_576: ctc12,
    Staker_stake0_576: ctc11,
    Staker_withdraw0_576: ctc11
    });
  const ctc14 = stdlib.T_Struct([['newUserStaked', ctc1], ['newEveryoneStaked', ctc1]]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6), [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]);
  const v1737 = ctc.selfAddress();
  const v1739 = stdlib.protect(ctc11, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:191:7:application call to [unknown function] (defined at: ./index.rsh:191:7:function exp)', 'at ./index.rsh:120:19:application call to "runStaker_withdraw0_576" (defined at: ./index.rsh:190:9:function exp)', 'at ./index.rsh:120:19:application call to [unknown function] (defined at: ./index.rsh:120:19:function exp)'],
    msg: 'in',
    who: 'Staker_withdraw'
    });
  const v1740 = v1739[stdlib.checkedBigNumberify('./index.rsh:190:9:spread', stdlib.UInt_max, 0)];
  const v1741 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1737), null);
  const v1743 = {
    rewards: v1485,
    stake: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)
    };
  const v1744 = stdlib.fromSome(v1741, v1743);
  const v1745 = v1744.stake;
  const v1746 = stdlib.le(v1740, v1745);
  stdlib.assert(v1746, {
    at: './index.rsh:191:23:application',
    fs: ['at ./index.rsh:191:7:application call to [unknown function] (defined at: ./index.rsh:191:14:function exp)', 'at ./index.rsh:191:7:application call to [unknown function] (defined at: ./index.rsh:191:7:function exp)', 'at ./index.rsh:120:19:application call to "runStaker_withdraw0_576" (defined at: ./index.rsh:190:9:function exp)', 'at ./index.rsh:120:19:application call to [unknown function] (defined at: ./index.rsh:120:19:function exp)'],
    msg: null,
    who: 'Staker_withdraw'
    });
  const v1748 = ['Staker_withdraw0_576', v1739];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1424, v1425, v1426, v1427, v1448, v1450, v1469, v1485, v1488, v1489, v1490, v1491, v1492, v1497, v1498, v1626, v1628, v1630, v1635, v1637, v1640, v1649, v1651, v1654, v1748],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:192:16:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./index.rsh:192:20:decimal', stdlib.UInt_max, 0), v1427]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1790], secs: v1792, time: v1791, didSend: v747, from: v1789 } = txn1;
      
      switch (v1790[0]) {
        case 'Staker_harvest0_576': {
          const v1793 = v1790[1];
          
          break;
          }
        case 'Staker_stake0_576': {
          const v2059 = v1790[1];
          
          break;
          }
        case 'Staker_withdraw0_576': {
          const v2325 = v1790[1];
          ;
          const v2361 = v1497[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
          const v2362 = v2361[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 0)];
          const v2366 = v2361[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
          const v2367 = v2361[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 2)];
          const v2368 = [v2362, v2366, v2367];
          const v2369 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1), v2368);
          ;
          undefined /* setApiDetails */;
          const v2538 = v2325[stdlib.checkedBigNumberify('./index.rsh:190:9:spread', stdlib.UInt_max, 0)];
          const v2539 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1789), null);
          const v2542 = stdlib.fromSome(v2539, v1743);
          const v2543 = v2542.stake;
          const v2545 = stdlib.le(v2538, v2543);
          ;
          const v2546 = v2369[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 1)];
          const v2547 = v2546[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 0)];
          const v2551 = stdlib.sub(v2547, v2538);
          const v2554 = v2546[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 1)];
          const v2555 = v2546[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 2)];
          const v2556 = [v2551, v2554, v2555];
          const v2557 = stdlib.Array_set(v2369, stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 1), v2556);
          sim_r.txns.push({
            amt: v2538,
            kind: 'from',
            to: v1789,
            tok: v1427
            });
          const v2558 = stdlib.sub(v1490, v2538);
          const v2559 = stdlib.sub(v2543, v2538);
          const v2564 = v2542.rewards;
          const v2565 = v2564[stdlib.checkedBigNumberify('./index.rsh:205:50:array ref', stdlib.UInt_max, 0)];
          let v2566;
          const v2567 = stdlib.eq(v2558, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
          if (v2567) {
            v2566 = v1637;
            }
          else {
            const v2568 = stdlib.muldiv(v1637, v2538, v2558);
            v2566 = v2568;
            }
          let v2569;
          const v2570 = stdlib.ge(v2566, v2565);
          if (v2570) {
            v2569 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2571 = stdlib.sub(v2565, v2566);
            v2569 = v2571;
            }
          const v2572 = v2564[stdlib.checkedBigNumberify('./index.rsh:205:50:array ref', stdlib.UInt_max, 1)];
          let v2573;
          if (v2567) {
            v2573 = v1651;
            }
          else {
            const v2575 = stdlib.muldiv(v1651, v2538, v2558);
            v2573 = v2575;
            }
          let v2576;
          const v2577 = stdlib.ge(v2573, v2572);
          if (v2577) {
            v2576 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
            }
          else {
            const v2578 = stdlib.sub(v2572, v2573);
            v2576 = v2578;
            }
          const v2579 = [v2569, v2576];
          const v2580 = {
            rewards: v2579,
            stake: v2559
            };
          await stdlib.simMapSet(sim_r, 0, v1789, v2580);
          const v2582 = {
            newEveryoneStaked: v2558,
            newUserStaked: v2559
            };
          const v2583 = await txn1.getOutput('Staker_withdraw', 'v2582', ctc14, v2582);
          
          const v5584 = v1488;
          const v5585 = v1492;
          const v5586 = v2558;
          const v5587 = v1791;
          const v5588 = v1491;
          const v5589 = v2557;
          const v5590 = v1498;
          const v5592 = stdlib.le(v1491, v1469);
          const v5593 = v2567 ? v5592 : true;
          if (v5593) {
            const v5594 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
            const v5595 = stdlib.le(v1469, v1491);
            const v5596 = v5595 ? v1469 : v1491;
            let v5597;
            const v5598 = stdlib.ge(v1492, v5596);
            if (v5598) {
              v5597 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v5599 = stdlib.sub(v5596, v1492);
              v5597 = v5599;
              }
            const v5600 = stdlib.mul(v5597, v1448);
            const v5601 = stdlib.add(v5594, v5600);
            const v5602 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
            const v5603 = stdlib.le(v5601, v5602);
            const v5604 = v5603 ? v5601 : v5602;
            const v5605 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
            let v5606;
            if (v5598) {
              v5606 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v5607 = stdlib.sub(v5596, v1492);
              v5606 = v5607;
              }
            const v5608 = stdlib.mul(v5606, v1450);
            const v5609 = stdlib.add(v5605, v5608);
            const v5610 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
            const v5611 = stdlib.le(v5609, v5610);
            const v5612 = v5611 ? v5609 : v5610;
            const v5613 = [v5604, v5612];
            sim_r.isHalt = false;
            }
          else {
            const v5614 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
            const v5615 = stdlib.le(v1469, v1491);
            const v5616 = v5615 ? v1469 : v1491;
            let v5617;
            const v5618 = stdlib.ge(v1492, v5616);
            if (v5618) {
              v5617 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v5619 = stdlib.sub(v5616, v1492);
              v5617 = v5619;
              }
            const v5620 = stdlib.mul(v5617, v1448);
            const v5621 = stdlib.add(v5614, v5620);
            const v5622 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
            const v5623 = stdlib.le(v5621, v5622);
            const v5624 = v5623 ? v5621 : v5622;
            const v5625 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
            let v5626;
            if (v5618) {
              v5626 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
              }
            else {
              const v5627 = stdlib.sub(v5616, v1492);
              v5626 = v5627;
              }
            const v5628 = stdlib.mul(v5626, v1450);
            const v5629 = stdlib.add(v5625, v5628);
            const v5630 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
            const v5631 = stdlib.le(v5629, v5630);
            const v5632 = v5631 ? v5629 : v5630;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc6, ctc6, ctc1, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1790], secs: v1792, time: v1791, didSend: v747, from: v1789 } = txn1;
  switch (v1790[0]) {
    case 'Staker_harvest0_576': {
      const v1793 = v1790[1];
      return;
      break;
      }
    case 'Staker_stake0_576': {
      const v2059 = v1790[1];
      return;
      break;
      }
    case 'Staker_withdraw0_576': {
      const v2325 = v1790[1];
      ;
      const v2361 = v1497[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
      const v2362 = v2361[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 0)];
      const v2366 = v2361[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1)];
      const v2367 = v2361[stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 2)];
      const v2368 = [v2362, v2366, v2367];
      const v2369 = stdlib.Array_set(v1497, stdlib.checkedBigNumberify('./index.rsh:120:19:dot', stdlib.UInt_max, 1), v2368);
      ;
      undefined /* setApiDetails */;
      const v2538 = v2325[stdlib.checkedBigNumberify('./index.rsh:190:9:spread', stdlib.UInt_max, 0)];
      const v2539 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1789), null);
      const v2542 = stdlib.fromSome(v2539, v1743);
      const v2543 = v2542.stake;
      const v2545 = stdlib.le(v2538, v2543);
      stdlib.assert(v2545, {
        at: './index.rsh:196:16:application',
        fs: ['at ./index.rsh:193:7:application call to [unknown function] (defined at: ./index.rsh:193:7:function exp)'],
        msg: null,
        who: 'Staker_withdraw'
        });
      const v2546 = v2369[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 1)];
      const v2547 = v2546[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 0)];
      const v2551 = stdlib.sub(v2547, v2538);
      const v2554 = v2546[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 1)];
      const v2555 = v2546[stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 2)];
      const v2556 = [v2551, v2554, v2555];
      const v2557 = stdlib.Array_set(v2369, stdlib.checkedBigNumberify('./index.rsh:197:41:application', stdlib.UInt_max, 1), v2556);
      ;
      const v2558 = stdlib.sub(v1490, v2538);
      const v2559 = stdlib.sub(v2543, v2538);
      const v2564 = v2542.rewards;
      const v2565 = v2564[stdlib.checkedBigNumberify('./index.rsh:205:50:array ref', stdlib.UInt_max, 0)];
      let v2566;
      const v2567 = stdlib.eq(v2558, stdlib.checkedBigNumberify('./index.rsh:30:13:decimal', stdlib.UInt_max, 0));
      if (v2567) {
        v2566 = v1637;
        }
      else {
        const v2568 = stdlib.muldiv(v1637, v2538, v2558);
        v2566 = v2568;
        }
      let v2569;
      const v2570 = stdlib.ge(v2566, v2565);
      if (v2570) {
        v2569 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2571 = stdlib.sub(v2565, v2566);
        v2569 = v2571;
        }
      const v2572 = v2564[stdlib.checkedBigNumberify('./index.rsh:205:50:array ref', stdlib.UInt_max, 1)];
      let v2573;
      if (v2567) {
        v2573 = v1651;
        }
      else {
        const v2575 = stdlib.muldiv(v1651, v2538, v2558);
        v2573 = v2575;
        }
      let v2576;
      const v2577 = stdlib.ge(v2573, v2572);
      if (v2577) {
        v2576 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
        }
      else {
        const v2578 = stdlib.sub(v2572, v2573);
        v2576 = v2578;
        }
      const v2579 = [v2569, v2576];
      const v2580 = {
        rewards: v2579,
        stake: v2559
        };
      await stdlib.mapSet(map0, v1789, v2580);
      const v2582 = {
        newEveryoneStaked: v2558,
        newUserStaked: v2559
        };
      const v2583 = await txn1.getOutput('Staker_withdraw', 'v2582', ctc14, v2582);
      if (v747) {
        stdlib.protect(ctc0, await interact.out(v2325, v2583), {
          at: './index.rsh:190:10:application',
          fs: ['at ./index.rsh:190:10:application call to [unknown function] (defined at: ./index.rsh:190:10:function exp)', 'at ./index.rsh:214:10:application call to "k" (defined at: ./index.rsh:193:7:function exp)', 'at ./index.rsh:193:7:application call to [unknown function] (defined at: ./index.rsh:193:7:function exp)'],
          msg: 'out',
          who: 'Staker_withdraw'
          });
        }
      else {
        }
      
      const v5584 = v1488;
      const v5585 = v1492;
      const v5586 = v2558;
      const v5587 = v1791;
      const v5588 = v1491;
      const v5589 = v2557;
      const v5590 = v1498;
      const v5592 = stdlib.le(v1491, v1469);
      const v5593 = v2567 ? v5592 : true;
      if (v5593) {
        const v5594 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
        const v5595 = stdlib.le(v1469, v1491);
        const v5596 = v5595 ? v1469 : v1491;
        let v5597;
        const v5598 = stdlib.ge(v1492, v5596);
        if (v5598) {
          v5597 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v5599 = stdlib.sub(v5596, v1492);
          v5597 = v5599;
          }
        const v5600 = stdlib.mul(v5597, v1448);
        const v5601 = stdlib.add(v5594, v5600);
        const v5602 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
        const v5603 = stdlib.le(v5601, v5602);
        const v5604 = v5603 ? v5601 : v5602;
        const v5605 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
        let v5606;
        if (v5598) {
          v5606 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v5607 = stdlib.sub(v5596, v1492);
          v5606 = v5607;
          }
        const v5608 = stdlib.mul(v5606, v1450);
        const v5609 = stdlib.add(v5605, v5608);
        const v5610 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
        const v5611 = stdlib.le(v5609, v5610);
        const v5612 = v5611 ? v5609 : v5610;
        const v5613 = [v5604, v5612];
        return;
        }
      else {
        const v5614 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 0)];
        const v5615 = stdlib.le(v1469, v1491);
        const v5616 = v5615 ? v1469 : v1491;
        let v5617;
        const v5618 = stdlib.ge(v1492, v5616);
        if (v5618) {
          v5617 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v5619 = stdlib.sub(v5616, v1492);
          v5617 = v5619;
          }
        const v5620 = stdlib.mul(v5617, v1448);
        const v5621 = stdlib.add(v5614, v5620);
        const v5622 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 0)];
        const v5623 = stdlib.le(v5621, v5622);
        const v5624 = v5623 ? v5621 : v5622;
        const v5625 = v1654[stdlib.checkedBigNumberify('./index.rsh:126:31:array ref', stdlib.UInt_max, 1)];
        let v5626;
        if (v5618) {
          v5626 = stdlib.checkedBigNumberify('./index.rsh:25:24:decimal', stdlib.UInt_max, 0);
          }
        else {
          const v5627 = stdlib.sub(v5616, v1492);
          v5626 = v5627;
          }
        const v5628 = stdlib.mul(v5626, v1450);
        const v5629 = stdlib.add(v5625, v5628);
        const v5630 = v1488[stdlib.checkedBigNumberify('./index.rsh:127:27:array ref', stdlib.UInt_max, 1)];
        const v5631 = stdlib.le(v5629, v5630);
        const v5632 = v5631 ? v5629 : v5630;
        return;
        }
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Any_halt()byte[0]`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`],
    pure: [`end()uint64`, `opts()(uint64,uint64,(uint64,uint64),uint64)`, `remainingRewards()(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`, `totalStaked()uint64`],
    sigs: [`Any_halt()byte[0]`, `Staker_harvest()((uint64,uint64),(uint64,uint64))`, `Staker_stake(uint64)(uint64,uint64)`, `Staker_withdraw(uint64)(uint64,uint64)`, `end()uint64`, `opts()(uint64,uint64,(uint64,uint64),uint64)`, `remainingRewards()(uint64,uint64)`, `rewardsAvailableAt(address,uint64)(uint64,uint64)`, `staked(address)uint64`, `totalStaked()uint64`]
    },
  appApproval: `BiAiAAEECAYDEFgCaJABmAHaAWBIUKCNBpmE+e4J6Z+63A27i4TVDumYj+0O8KndrQ3U5rnYBta1l7MIlozsuwnrAfMBgwKLAvsB0gHiAZWY5pcGBSYHAQABAQAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECCAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI1ADEYQRDdKmRJIls1ASVbNQIxGSMSQQAJMQArKExmQhCzNhoAF0lBBMYiNQQjNQZJIREMQAErSSESDEAA+0khEwxAAKFJIRQMQAA5IRQSRDQBSSEEDEAAGCEEEkQoZClkUCcEZFBJNQNXgBA1B0IQWiEFEkQoZClkUEk1A1eAEDUHQhBGIRMSRDQBSSEEDEAAKiEEEkQnBjYaAUkxGGFAAAVIK0IAAihiSTX/VwEYNP8iVU1XEAg1B0IQDyEFEkQnBjYaAUkxGGFAAAVIK0IAAihiSTX/VwEYNP8iVU1XEAg1B0IP5SESEkQ0AUkhBQxAADNJIQQMQAAYIQQSRChkKWRQJwRkUEk1A1cgKDUHQg+5IQUSRChkKWRQSTUDVyAoNQdCD6UjEkQoZClkUEk1A1cgKDUHQg+SSSEVDEAAECEVEkQqNf8oNP9QNQVCCQchERJENhoBNf8pNP9QNQVCA7RJIRYMQAMwSSEXDEADFkkhGAxAADkhGBJENAFJIQQMQAAYIQQSRChkKWRQJwRkUEk1A1eYCDUHQg8vIQUSRChkKWRQSTUDV5gINQdCDxshFxJENAFJIQQMQAFnIQQSRDYaAhc1/yhkKWRQJwRkUEk1AyEJWzX+NAMhCls1/TQDIQtbNfw0AyEZWzX7NAMhGls1+jQDIRslWBc1+TQDIRwlWBc1+DQDV3AQJwVQNhoBSTEYYUAABUgrQgACKGJJNfZXARg09iJVTUk19yEGWzX2NPdXABBJNfUiWzX0NP80/kk0/w5NNfM0/TTzD0k18UEABiI18kIABzTzNP0JNfI0AyEMWzTyNAMhB1sLCDXwNPs08Ek0+w5NNe80/CISSTXtQQAHNO817kIACjTvNPYdNPyXNe409DTuD0EABiI17EIABzTuNPQJNew09SVbNes08UEABiI16kIABzTzNP0JNeo0AyEdWzTqNAMhDVsLCDXpNPk06Uk0+Q5NNeg07UEABzToNedCAAo06DT2HTT8lzXnNOs05w9BAAYiNeZCAAc05zTrCTXmNPo07Ek0+g5NFjT4NOZJNPgOTRZQNQdCDachBRJENhoCFzX/KGQpZFBJNQMhCVs1/jQDIQpbNf00AyELWzX8NAMhHls1+zQDIQxbNfo0A4HqAVs1+TQDgfIBWzX4NANXcBAnBVA2GgFJMRhhQAAFSCtCAAIoYkk19lcBGDT2IlVNSTX3IQZbNfY091cAEEk19SJbNfQ0/zT+STT/Dk018zT9NPMPSTXxQQAGIjXyQgAHNPM0/Qk18jQDgcoBWzTyNAMhB1sLCDXwNPs08Ek0+w5NNe80/CISSTXtQQAHNO817kIACjTvNPYdNPyXNe409DTuD0EABiI17EIABzTuNPQJNew09SVbNes08UEABiI16kIABzTzNP0JNeo0AyEfWzTqNAMhDVsLCDXpNPk06Uk0+Q5NNeg07UEABzToNedCAAo06DT2HTT8lzXnNOs05w9BAAYiNeZCAAc05zTrCTXmNPo07Ek0+g5NFjT4NOZJNPgOTRZQNQdCDEUhFhJENhoBNf8nBDT/UDUFQgB9SSEgDEAAEyEgEkQqNf8oNP9QJwVQNQVCAGOBhqrdqAMSRDQBSSEEDEAAGCEEEkQoZClkUCcEZFBJNQNXaAg1B0IL7yEFEkQoZClkUEk1A1doCDUHQgvbNhoBFzYaAhc1BDYaAzUFSSEIDEAHEEkhBQxABwhJJAxABUMkEkQhBDQBEkQ0BEkiEkw0AhIRRChkKWRQJwRkUEk1A1cAIDX/NANXICg1/jQDIQ5bNf00AyEPWzX8NAMhB1s1+zQDIQ1bNfo0AyEJWzX5NANXcBA1+DQDV4AQNfc0AyEKWzX2NAMhC1s19TQDgaABWzX0NAOBqAFbNfM0A1ewIjXyNAMhHls18TQDIR9bNfA0A1fqARc17zQDIRlbNe40AyEaWzXtNAMhGyVYFzXsNAMhHCVYFzXrNAOBkwIhBlg16jQFNemABNWOHas06VCwNOkiVUkjDEAChEkhCAxAAWMhCBJENOlXAQg16DTyVxERNec08lcAETTnVwAINOdXCAhQNOdXEAFQUDTySDXmNOgXNeU0+CcFUDEASTEYYUAABUgrQgACKGJJNeNXARg04yJVTUk15CEGWzXjNOU04w5ENOZXERE14rEisgE05bISJLIQMQCyFDT8shGzNPU05Qk14TTjNOUJNeA05FcAEEk13yJbNd404SISSTXcQQAHNO013UIACjTtNOUdNOGXNd003TTeD0EABiI120IABzTeNN0JNds03yVbNdo03EEABzTrNdlCAAo06zTlHTThlzXZNNk02g9BAAYiNdhCAAc02jTZCTXYMQApNNsWNNgWUDTgFlBQKExmgAgAAAAAAAAKFjTgFjThFlBQsDTgFjThFlA1BzT/NP40/TT8NPs0+jT5NPg06jT3NPM04TIGNPQ05lcAETTiIls05QkWNOJXCAhQNOJXEAFQUDTmSDTxQgdeSDTpVwEISTXoFzXnNPJXERE15jQASSMINQA050sBOBISRDT8SwE4ERJEJEsBOBASRDIKSwE4FBJESDT1NOcINeU0+CcFUDEASTEYYUAABUgrQgACKGJJNeNXARg04yJVTUk15CEGWzTnCDXjNORXABA14jTlIhJJNeBBAAc07TXhQgAKNO005x005Zc14TTgQQAHNOs130IACjTrNOcdNOWXNd8xACk04iJbNOEIFjTiJVs03wgWUDTjFlBQKExmgAgAAAAAAAAI1jTjFjTlFlBQsDTjFjTlFlA1BzT/NP40/TT8NPs0+jT5NPg06jT3NPM05TIGNPQ08lcAETTmIls05wgWNOZXCAhQNOZXEAFQUDTySDTxQgZESDTyVxERNeg08lcAETToVwAINOhXCAhQNOhXEAFQUDTySDXnNPgnBVAxAEkxGGFAAAVIK0IAAihiSTXlVwEYNOUiVU1JNeYhBls15TTmVwAQSTXkIls14zTvQQAGIjXiQgAHNPA09gk14jQDIQxbNOI0+wsINeE07jThSTTuDk014DT1IhJJNd5BAAc04DXfQgAKNOA05R009Zc13zTjNN8PQQAGIjXdQgAHNN804wk13TTtNN1JNO0OTTXcNOQlWzXbNO9BAAYiNdpCAAc08DT2CTXaNAMhHVs02jT6Cwg12TTsNNlJNOwOTTXYNN5BAAc02DXXQgAKNNg05R009Zc11zTbNNcPQQAGIjXWQgAHNNc02wk11jTrNNZJNOsOTTXVsSKyATTcsggjshAxALIHszTnVwARNdSxIrIBNNWyEiSyEDEAshQ0/bIRszEAKTTjNNwIFjTbNNUIFlA05RZQUChMZjTuNNwJFjTsNNUJFlA104AIAAAAAAAAB6U03BY01RZQNNNQULA03BY01RZQNNNQNQc0/zT+NP00/DT7NPo0+TT4NO003AkWNOs01QkWUDTTNPM09TIGNPQ050gqNNQiWzTVCRY01FcICFA01FcQAVBQNOdXERFQNPE03AlCBF9IIQU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/NAMhDls1/jQDIQ9bNf00A1egIjX8NAOBwgFbNfs0BTX6gAQuRcYBNPpQsDT6IlVAALuACAAAAAAAAAqgsCo1B7EisgE0+7III7IQNP+yB7M0/FcAEUk1+SJbNfixIrIBNPiyEiSyEDT/shQ0/rIRs7EisgE0/EgqNPhJCRY0+VcICFA0+VcQAVBQNPxXERFQVxERIluyEiSyEDT/shQ0/bIRs7EisgEishIkshAyCbIVMgqyFDT9shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbOxIrIBIrIII7IQMgmyCTIKsgezMRkhIRJEQgVbMQA0/xJEsSKyATT7sggjshA0/7IHszT8VwARSTX5Ils1+LEisgE0+LISJLIQNP+yFDT+shGzsSKyATT8SCo0+EkJFjT5VwgIUDT5VxABUFA0/FcREVBXEREiW7ISJLIQNP+yFDT9shGzsSKyASKyEiSyEDIJshUyCrIUNP2yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs7EisgEisggjshAyCbIJMgqyB7MxGSEhEkRCBKhISSMMQAEQSCM0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/NAMhDls1/jQDIQdbNf00A1dgIjX8NAOBkgFbNfs0A4GiAVs1+oAEmouRdLA0AEkjCDUANPtLATgIEkQjSwE4EBJEMgpLATgHEkRINPxXABE1+TQASSMINQA0+ksBOBISRDT+SwE4ERJEJEsBOBASRDIKSwE4FBJESDT/MQASRDT9IQgINfiAEAAAAAAAAAAAAAAAAAAAAAA19zT/NANXICg0/jQDIQ9bNAOBigFbNAOBmgFbNPg0A4GCAVsINPdJNPsWNPoWUDT4IjIGNP00/EgqNPkiWzT6CBY0+VcICFA0+VcQAVBQNPxXERFQNPtCAYlIIjQBEkQ0BEkiEkw0AhIRRDQFVwAoNf80BYEoWzX+NAWBMFs1/YAEXohMcDT/UDT+FlA0/RZQsDQASSMINQAhEEsBOAgSRCNLATgQEkQyCksBOAcSREiAEQAAAAAAAAAAAAAAAAAAAAAASTX8SVA1+zT+NP0TRDT7VwARNfo0+0gqJwU0+lcICFA0+lcQAVBQNPtXERFQNfk0AEkjCDUAIRBLATgIEkQjSwE4EBJEMgpLATgHEkRIsSKyASKyEiSyEDIKshQ0/rIRszT5VxERNfg0+VcAEScFNPhXCAhQNPhXEAFQUDT5SDX3NABJIwg1ACEQSwE4CBJEI0sBOBASRDIKSwE4BxJESLEisgEishIkshAyCrIUNP2yEbM0/1cQEDX2NP+BIFs19TT2IltJNfQ09Qs18zT2JVtJNfI09Qs18TEANP9QNP4WUDT9FlAyBhZQNPdQNPUWUDT0FlA08xZQNPIWUDTxFlAoSwFXAH9nKUsBV38rZ0gjNQEyBjUCMRkiEkRCAgg1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NfQ18zXyNfE18DT7IhM0/TT2DhFBAQE0+CJbNe80/TT2STT9Dk017jT6NO4PSTXsQQAGIjXtQgAHNO40+gk17TTvNO009AsINes0+SJbSTXqNOtJNOoOTTXpNPglWzXoNOxBAAYiNedCAAc07jT6CTXnNOg05zT1Cwg15jT5JVtJNeU05kk05Q5NNeQ06RY05BZQNeM08DTxUDTyFlA08xZQNPQWUDT1FlA09hZQNPdQNPlQNPoWUDT7FlA0/BZQNP0WUDT+UDT/FlA07xZQNO4WUDTsFlEHCFA06hZQNOkWUDToFlA05RZQNOQWUDTjUChLAVcAf2cpSwFXf39nJwRLAVf+JWdIIQQ1ATIGNQIxGSISREIA2jT4Ils17zT9NPZJNP0OTTXuNPo07g9JNexBAAYiNe1CAAc07jT6CTXtNO807TT0Cwg16zT5IltJNeo060k06g5NNek0+CVbNeg07EEABiI150IABzTuNPoJNec06DTnNPULCDXmNPklW0k15TTmSTTlDk015DTwNPFQNPIWUDTzFlA09BZQNPUWUDT2FlA091A0+VA0+hZQNPsWUDT+UDT/FlA07xZQNOoWUDTpFlA06BZQNOUWUDTkFlAoSwFXAH9nKUsBV397Z0ghBTUBMgY1AjEZIhJEQgAAKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkQiNQEiNQJC/8s=`,
  appClear: `Bg==`,
  extraPages: 2,
  mapDataKeys: 1,
  mapDataSize: 25,
  stateKeys: 3,
  stateSize: 291,
  unsupported: [],
  version: 9,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "rewardToken1",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "stakeToken",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "rewardsPerBlock",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v1425",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v1426",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1427",
                "type": "address"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "rewardToken1",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "stakeToken",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "rewardsPerBlock",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v1425",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v1426",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1427",
                "type": "address"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_halt0_1144",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Deployer0_1144",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T17",
                "name": "v2710",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_576",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Staker_stake0_576",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Staker_withdraw0_576",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1790",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "userReceived",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "totalRemaining",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1957",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2262",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v2582",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2720",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Any_halt",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Staker_harvest",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "userReceived",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "totalRemaining",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Staker_stake",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Staker_withdraw",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "newUserStaked",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "newEveryoneStaked",
            "type": "uint256"
          }
        ],
        "internalType": "struct T23",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T0",
                "name": "_rewards",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "_stake",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Any_halt0_1144",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Deployer0_1144",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T17",
                "name": "v2710",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Staker_harvest0_576",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Staker_stake0_576",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T20",
                    "name": "_Staker_withdraw0_576",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1790",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "end",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "opts",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "rewardToken1",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "stakeToken",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "elem1",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "rewardsPerBlock",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "remainingRewards",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "v5689",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "v5690",
        "type": "uint256"
      }
    ],
    "name": "rewardsAvailableAt",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "v5693",
        "type": "address"
      }
    ],
    "name": "staked",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalStaked",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162005b1538038062005b158339810160408190526200002691620006b9565b6000805543600355620000386200039e565b6040805183518152602080850151805180516001600160a01b0390811684860152818401518116858701528186015180516060808801919091529085015160808701529091015160a085015291810151821660c08401528301511660e082015290517fbe0a8f83451a5b85df174b5589dfb4490569d5cf8a8e57fad89c07e242f973e4918190036101000190a1805160009081905281516020908101829052825160409081019290925282518184018051919091528351905182015283810151918201519101516200012a916001600160a01b039182169116146200011f57600162000122565b60005b600d620002f1565b6040818101805160009081905260208085018051518201518451909201919091528051518401518351901515940193909352915190516200016c92906200031b565b60608201908152608082018051600090528151602090810151810151825182015282510151604090810151825190151591015290519051620001b291906001906200031b565b60a0820152620001c53415600e620002f1565b602082015151606081015160409091015151620001e39190620007db565b60c0820152602080830151516060810151604090910151909101516200020a9190620007db565b60e08201526200021962000447565b33815260208084018051518284015280518201516001600160a01b039081166040808601919091528251810151909116606080860191909152436080860181905260a080880151908701528351519091015160c0808701919091528351518301515160e0808801919091529087015161010087015292515182015184015161012086015291850151610140850152600160008190559190915551620002c19183910162000843565b60405160208183030381529060405260029080519060200190620002e7929190620004ba565b505050506200097f565b81620003175760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200032562000549565b60005b60028110156200037b57848160028110620003475762000347620007af565b6020020151828260028110620003615762000361620007af565b602002015280620003728162000924565b91505062000328565b5081818460028110620003925762000392620007af565b60200201529392505050565b604080516101608101909152600061010082018181526101208301829052610140830191909152815260208101620003d562000549565b815260408051606081018252600080825260208281018290529282015291019081526020016200040462000549565b815260408051606081018252600080825260208281018290529282015291019081526020016200043362000549565b815260200160008152602001600081525090565b60405180610160016040528060006001600160a01b031681526020016200046d62000596565b81526000602082018190526040820181905260608201526080016200049162000549565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054620004c89062000942565b90600052602060002090601f016020900481019282620004ec576000855562000537565b82601f106200050757805160ff191683800117855562000537565b8280016001018555821562000537579182015b82811115620005375782518255916020019190600101906200051a565b5062000545929150620005ec565b5090565b60405180604001604052806002905b6200057f604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620005585790505090565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b03168152602001620005df604051806040016040528060008152602001600081525090565b8152602001600081525090565b5b80821115620005455760008155600101620005ed565b604080519081016001600160401b03811182821017156200063457634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b03811182821017156200063457634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200063457634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620006b457600080fd5b919050565b6000818303610100811215620006ce57600080fd5b620006d862000603565b83518152601f19820160e0811215620006f057600080fd5b620006fa6200063a565b60a08212156200070957600080fd5b620007136200066b565b915062000723602087016200069c565b825262000733604087016200069c565b60208301526040605f19850112156200074b57600080fd5b6200075562000603565b9350606086015184526080860151602085015283604083015260a086015160608301528181526200078960c087016200069c565b60208201526200079c60e087016200069c565b6040820152602083015250949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615620007f857620007f8620007c5565b500290565b8060005b60028110156200083d57815180518552602080820151818701526040918201511515918601919091526060909401939091019060010162000801565b50505050565b81516001600160a01b03168152610280810160208381015180516001600160a01b03908116858401528183015116604080860191909152810151805160608087019190915292015160808501529081015160a08401525060408301516001600160a01b03811660c08401525060608301516001600160a01b03811660e0840152506080830151610100818185015260a08501519150610120620008e981860184620007fd565b60c08601516101e086015260e08601516102008601529085015161022085015284015161024084015250610140909201516102609091015290565b60006000198214156200093b576200093b620007c5565b5060010190565b600181811c908216806200095757607f821691505b602082108114156200097957634e487b7160e01b600052602260045260246000fd5b50919050565b615186806200098f6000396000f3fe6080604052600436106100f65760003560e01c80638521eb921161008f578063ab53f2c611610061578063ab53f2c614610251578063afb62e5614610274578063b0c1f58a14610289578063e28095491461029c578063efbe1c1c146102b157005b80638521eb92146101f35780638712236d1461020b57806398807d841461021e578063a1bb51161461023e57005b80633bc5b7bf116100c85780633bc5b7bf1461016f5780636f0fe5c91461019c578063817b1cd2146101c957806383230757146101de57005b80630329cf49146100ff5780630a47debc146101125780631e93b0f11461013d5780632c10a1591461015c57005b366100fd57005b005b6100fd61010d366004614314565b6102c6565b34801561011e57600080fd5b506101276102ea565b6040516101349190614370565b60405180910390f35b34801561014957600080fd5b506003545b604051908152602001610134565b6100fd61016a36600461437e565b61050c565b34801561017b57600080fd5b5061018f61018a3660046143a5565b61052c565b60405161013491906143e8565b3480156101a857600080fd5b506101bc6101b7366004614436565b610543565b6040516101349190614462565b3480156101d557600080fd5b5061014e610d58565b3480156101ea57600080fd5b5060015461014e565b6101fb610f82565b6040519015158152602001610134565b6101bc610219366004614479565b610fd5565b34801561022a57600080fd5b5061014e6102393660046143a5565b61103f565b6100fd61024c366004614492565b6112d3565b34801561025d57600080fd5b506102666112f3565b6040516101349291906144d0565b34801561028057600080fd5b506101bc611390565b6101bc610297366004614479565b6115cc565b6102a4611635565b604051610134919061450a565b3480156102bd57600080fd5b5061014e611688565b6102ce613840565b6102e66102e0368490038401846146a0565b826118b1565b5050565b6102f26138a5565b600160005414156103a75760006002805461030c9061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546103389061473f565b80156103855780601f1061035a57610100808354040283529160200191610385565b820191906000526020600020905b81548152906001019060200180831161036857829003601f168201915b505050505080602001905181019061039d91906148a1565b6020015192915050565b60036000541415610452576000600280546103c19061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546103ed9061473f565b801561043a5780601f1061040f5761010080835404028352916020019161043a565b820191906000526020600020905b81548152906001019060200180831161041d57829003601f168201915b505050505080602001905181019061039d919061495b565b600660005414156104fd5760006002805461046c9061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546104989061473f565b80156104e55780601f106104ba576101008083540402835291602001916104e5565b820191906000526020600020905b8154815290600101906020018083116104c857829003601f168201915b505050505080602001905181019061039d9190614a88565b610509600060086128c6565b90565b610514613840565b6102e661052636849003840184614c00565b826128ec565b6105346138fa565b61053d82612bcd565b92915050565b604080518082019091526000808252602082015260016000541415610612576000600280546105719061473f565b80601f016020809104026020016040519081016040528092919081815260200182805461059d9061473f565b80156105ea5780601f106105bf576101008083540402835291602001916105ea565b820191906000526020600020905b8154815290600101906020018083116105cd57829003601f168201915b505050505080602001905181019061060291906148a1565b90506106106000600a6128c6565b505b600360005414156109bf5760006002805461062c9061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546106589061473f565b80156106a55780601f1061067a576101008083540402835291602001916106a5565b820191906000526020600020905b81548152906001019060200180831161068857829003601f168201915b50505050508060200190518101906106bd919061495b565b90506106c7613919565b60e08201518151528051600060209091015260016106e486612bcd565b5160018111156106f6576106f66143c2565b14610702578051610710565b61070b85612bcd565b604001515b602082015260c0820151841015610727578361072d565b8160c001515b604082018190526101208301511080156080830152610752576000606082015261076d565b81610120015181604001516107679190614c4e565b60608201525b816080015181606001516107819190614c65565b826101a001516107919190614c84565b60a082018190526101c083015110156107af57816101c001516107b5565b8060a001515b60c0820152610140820151156101008201819052156107dd5760c081015160e082015261080b565b8161014001518160200151602001518260c001516107fb9190614c65565b6108059190614c9c565b60e08201525b60e08101516020820151515110610829576000610120820152610846565b6020810151515160e082015161083f9190614c4e565b6101208201525b80608001511561085d576000610140820152610879565b81610120015181604001516108729190614c4e565b6101408201525b8160a0015181610140015161088e9190614c65565b82610200015161089e9190614c84565b610160820181905261022083015110156108bd578161022001516108c4565b8061016001515b610180820152610100810151156108e6576101808101516101a0820152610916565b8161014001518160200151602001518261018001516109059190614c65565b61090f9190614c9c565b6101a08201525b6101a0810151602080830151510151106109375760006101c0820152610957565b6020808201515101516101a08201516109509190614c4e565b6101c08201525b816101e00151816101200151111561097457816101e0015161097b565b8061012001515b6101e0820151526102408201516101c0820151111561099f578161024001516109a6565b806101c001515b6101e090910180516020019190915251915061053d9050565b60066000541415610d4c576000600280546109d99061473f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a059061473f565b8015610a525780601f10610a2757610100808354040283529160200191610a52565b820191906000526020600020905b815481529060010190602001808311610a3557829003601f168201915b5050505050806020019051810190610a6a9190614a88565b9050610a74613919565b60e0820151815152805160006020909101526001610a9186612bcd565b516001811115610aa357610aa36143c2565b14610aaf578051610abd565b610ab885612bcd565b604001515b602082015260c0820151841015610ad45783610ada565b8160c001515b604082018190526101208301511080156080830152610aff5760006060820152610b1a565b8161012001518160400151610b149190614c4e565b60608201525b81608001518160600151610b2e9190614c65565b826101e00151610b3e9190614c84565b60a082018190526102408301511015610b5c57816102400151610b62565b8060a001515b60c082015261014082015115610100820181905215610b8a5760c081015160e0820152610bb8565b8161014001518160200151602001518260c00151610ba89190614c65565b610bb29190614c9c565b60e08201525b60e08101516020820151515110610bd6576000610120820152610bf3565b6020810151515160e0820151610bec9190614c4e565b6101208201525b806080015115610c0a576000610140820152610c26565b8161012001518160400151610c1f9190614c4e565b6101408201525b8160a00151816101400151610c3b9190614c65565b826102800151610c4b9190614c84565b61016082018190526102a08301511015610c6a57816102a00151610c71565b8061016001515b61018082015261010081015115610c93576101808101516101a0820152610cc3565b816101400151816020015160200151826101800151610cb29190614c65565b610cbc9190614c9c565b6101a08201525b6101a081015160208083015151015110610ce45760006101c0820152610d04565b6020808201515101516101a0820151610cfd9190614c4e565b6101c08201525b8161026001518161012001511115610d2157816102600151610d28565b8061012001515b6101e0820151526102c08201516101c0820151111561099f57816102c001516109a6565b61053d6000600a6128c6565b600060016000541415610e1557600060028054610d749061473f565b80601f0160208091040260200160405190810160405280929190818152602001828054610da09061473f565b8015610ded5780601f10610dc257610100808354040283529160200191610ded565b820191906000526020600020905b815481529060010190602001808311610dd057829003601f168201915b5050505050806020019051810190610e0591906148a1565b9050610e136000600c6128c6565b505b60036000541415610ecb57600060028054610e2f9061473f565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5b9061473f565b8015610ea85780601f10610e7d57610100808354040283529160200191610ea8565b820191906000526020600020905b815481529060010190602001808311610e8b57829003601f168201915b5050505050806020019051810190610ec0919061495b565b610140015192915050565b60066000541415610f7657600060028054610ee59061473f565b80601f0160208091040260200160405190810160405280929190818152602001828054610f119061473f565b8015610f5e5780601f10610f3357610100808354040283529160200191610f5e565b820191906000526020600020905b815481529060010190602001808311610f4157829003601f168201915b5050505050806020019051810190610ec09190614a88565b6105096000600c6128c6565b6000610f8c613840565b610f946139bb565b6040805160608101825260008082526020808301829052828401919091528251808201909352818352830191909152610fcd8284612cb2565b505051919050565b6040805180820190915260008082526020820152610ff1613840565b610ff96139f4565b611001613a0e565b6040805160208082018352878252606084019190915260028352815180820190925282825283015261103382846118b1565b50506060015192915050565b6000600160005414156110fc5760006002805461105b9061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546110879061473f565b80156110d45780601f106110a9576101008083540402835291602001916110d4565b820191906000526020600020905b8154815290600101906020018083116110b757829003601f168201915b50505050508060200190518101906110ec91906148a1565b90506110fa6000600b6128c6565b505b60036000541415611217576000600280546111169061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546111429061473f565b801561118f5780601f106111645761010080835404028352916020019161118f565b820191906000526020600020905b81548152906001019060200180831161117257829003601f168201915b50505050508060200190518101906111a7919061495b565b90506111b1613a46565b805160009081905281516020908101829052825181840180519190915251015260016111dc85612bcd565b5160018111156111ee576111ee6143c2565b146111fd57806020015161120b565b61120684612bcd565b604001515b60200151949350505050565b600660005414156112c2576000600280546112319061473f565b80601f016020809104026020016040519081016040528092919081815260200182805461125d9061473f565b80156112aa5780601f1061127f576101008083540402835291602001916112aa565b820191906000526020600020905b81548152906001019060200180831161128d57829003601f168201915b50505050508060200190518101906111a79190614a88565b6112ce6000600b6128c6565b919050565b6112db613840565b6102e66112ed36849003840184614cbe565b82612cb2565b6000606060005460028080546113089061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546113349061473f565b80156113815780601f1061135657610100808354040283529160200191611381565b820191906000526020600020905b81548152906001019060200180831161136457829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526001600054141561145f576000600280546113be9061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546113ea9061473f565b80156114375780601f1061140c57610100808354040283529160200191611437565b820191906000526020600020905b81548152906001019060200180831161141a57829003601f168201915b505050505080602001905181019061144f91906148a1565b905061145d600060096128c6565b505b60036000541415611515576000600280546114799061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546114a59061473f565b80156114f25780601f106114c7576101008083540402835291602001916114f2565b820191906000526020600020905b8154815290600101906020018083116114d557829003601f168201915b505050505080602001905181019061150a919061495b565b610100015192915050565b600660005414156115c05760006002805461152f9061473f565b80601f016020809104026020016040519081016040528092919081815260200182805461155b9061473f565b80156115a85780601f1061157d576101008083540402835291602001916115a8565b820191906000526020600020905b81548152906001019060200180831161158b57829003601f168201915b505050505080602001905181019061150a9190614a88565b610509600060096128c6565b60408051808201909152600080825260208201526115e8613840565b6115f06139f4565b6115f8613a0e565b60408051602080820183528782528383019190915260018352815180820190925282825283015261162982846118b1565b50506040015192915050565b61163d613a6f565b611645613840565b61164d6139f4565b611655613a0e565b60006020828101829052908252604080518083019091528281529083015261167d82846118b1565b505060200151919050565b600060016000541415611745576000600280546116a49061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546116d09061473f565b801561171d5780601f106116f25761010080835404028352916020019161171d565b820191906000526020600020905b81548152906001019060200180831161170057829003601f168201915b505050505080602001905181019061173591906148a1565b9050611743600060076128c6565b505b600360005414156117fa5760006002805461175f9061473f565b80601f016020809104026020016040519081016040528092919081815260200182805461178b9061473f565b80156117d85780601f106117ad576101008083540402835291602001916117d8565b820191906000526020600020905b8154815290600101906020018083116117bb57829003601f168201915b50505050508060200190518101906117f0919061495b565b60c0015192915050565b600660005414156118a5576000600280546118149061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546118409061473f565b801561188d5780601f106118625761010080835404028352916020019161188d565b820191906000526020600020905b81548152906001019060200180831161187057829003601f168201915b50505050508060200190518101906117f09190614a88565b610509600060076128c6565b6118c160066000541460206128c6565b81516118dc9015806118d557508251600154145b60216128c6565b6000808055600280546118ee9061473f565b80601f016020809104026020016040519081016040528092919081815260200182805461191a9061473f565b80156119675780601f1061193c57610100808354040283529160200191611967565b820191906000526020600020905b81548152906001019060200180831161194a57829003601f168201915b505050505080602001905181019061197f9190614a88565b9050611989613a91565b7f669ebcfdce7c382cf0aa9c383864dd37ed14852b33172c3c058763fe2cedf982846040516119b89190614d4c565b60405180910390a160006020850151515160028111156119da576119da6143c2565b141561204c576119ec341560196128c6565b6101a0820180516020908101515183515281518101518101518351820152815101516040908101518351901515910152518151611a2c9190600190613039565b8160200181905250611a4e611a4733846060015160006130ad565b601a6128c6565b60e0820151604082018051919091525160006020909101526001611a7133612bcd565b516001811115611a8357611a836143c2565b14611a92578060400151611aa0565b611a9b33612bcd565b604001515b606082015261022082015115611abc5760006080820152611ad8565b816101200151826102000151611ad29190614c4e565b60808201525b81608001518160800151611aec9190614c65565b826101e00151611afc9190614c84565b60a082018190526102408301511015611b1a57816102400151611b20565b8060a001515b60c082015261014082015115610100820181905215611b485760c081015160e0820152611b76565b8161014001518160600151602001518260c00151611b669190614c65565b611b709190614c9c565b60e08201525b60e08101516060820151515110611b94576000610120820152611bb1565b6060810151515160e0820151611baa9190614c4e565b6101208201525b8161026001518161012001511115611bce57816102600151611bd5565b8061012001515b61014082015261022082015115611bf3576000610160820152611c10565b816101200151826102000151611c099190614c4e565b6101608201525b8160a00151816101600151611c259190614c65565b826102800151611c359190614c84565b61018082018190526102a08301511015611c5457816102a00151611c5b565b8061018001515b6101a082015261010081015115611c7d576101a08101516101c0820152611cad565b816101400151816060015160200151826101a00151611c9c9190614c65565b611ca69190614c9c565b6101c08201525b6101c08101516060820151516020015110611ccf5760006101e0820152611cf0565b606081015151602001516101c0820151611ce99190614c4e565b6101e08201525b816102c00151816101e001511115611d0d57816102c00151611d14565b806101e001515b6102008201908152610140820180516102208401805191909152915191516020019190915251604051339180156108fc02916000818181858888f19350505050158015611d65573d6000803e3d6000fd5b5061020081015160208201515151611d7d9190614c4e565b610240820180519190915260208083018051518201518351909201919091525151604090810151915191151591810191909152820151610200820151611dc5919033906130c5565b61014081015160608201515151611ddc9190614c84565b6102608201515261020081015160608201515160200151611dfd9190614c84565b61026082018051602090810192909252516102808301805191909152606083015182015181518301523360009081526004835260409020805460ff19166001908117825591518051805193830193909355918301516002820155910151600390910155610140810151610240830151611e769190614c4e565b6102a0808301519190915261020082015190830151611e959190614c4e565b6102a0820180516020908101929092526102208301516102c084018051919091529051815190920191909152516040517fc18d41a16c8508c77c61311f46a0ea83181d0a93785999338f4daeb6d39fee4991611ef09161450a565b60405180910390a16102c08101516020840152610140810151610260830151611f199190614c4e565b6102e0820151526102008101516102c0830151611f369190614c4e565b6102e082015160200152611f48613dae565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c08089015187519091015260e0808901518751909101526102e08701518487018051919091526102a088015181518601526101808901518151909401939093526101408801518351909501949094528151439101526101608601519051909201919091528201516102408301516120159190600090613039565b602082015160c001526101408201516101c08401516120349190614c4e565b602082015160e00152612046816130de565b506128c0565b6001602085015151516002811115612066576120666143c2565b141561242957602084015151604001516103008201526120883415601b6128c6565b610300810151516101a083015160200151516120a49190614c84565b61032082018051919091526101a08301805160209081015181015183518201529051015160409081015191519115159101526060820151610300820151516120f9916120f2913391906130ad565b601c6128c6565b610300810151516101408301516121109190614c84565b61034082015260e08201516103608201805191909152516000602090910152600161213a33612bcd565b51600181111561214c5761214c6143c2565b1461215c5780610360015161216a565b61216533612bcd565b604001515b6103808201819052610300820151516020909101516121899190614c84565b6103a0820152610340810151156103e08201819052156121b4576102608201516103c08201526121e2565b610340810151610300820151516102608401516121d19190614c65565b6121db9190614c9c565b6103c08201525b806103e00151156121fe576102c082015161040082015261222c565b610340810151610300820151516102c084015161221b9190614c65565b6122259190614c9c565b6104008201525b6103c081015161038082015151516122449190614c84565b6104208201515261040081015161038082015151602001516122669190614c84565b610420820180516020908101929092525161044083018051919091526103a083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516104608401805191909152610340840151815190930192909252905190517f6dc9649f05daeecd94a93046c6373f3a97aced80f44541dd016aa47c2154f9859161231891614462565b60405180910390a16104608101516040840152612333613dae565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c08089015187519091015260e0808901518751909101526102e08801518487018051919091526101008901518151909501949094526101808801518451909301929092526103408601518351909401939093528151439301929092526101608501519051909101526101a08301516103208301516124079190600190613039565b60208201805160c001919091526101c0840151905160e00152612046816130de565b6002602085015151516002811115612443576124436143c2565b14156128c057602084015151606001516104808201526124653415601d6128c6565b6101a082018051602090810151516104a08401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516124b09190600190613039565b816104c001819052506124d36124cc33846060015160006130ad565b601e6128c6565b60e08201516104e0820180519190915251600060209091015260016124f733612bcd565b516001811115612509576125096143c2565b1461251957806104e00151612527565b61252233612bcd565b604001515b61050082018190526020015161048082015151612547911015601f6128c6565b610480810151516104c082015160200151516125639190614c4e565b61052082018051919091526104c08201805160209081015181015183518201529051015160409081015191519115159101526060820151610480820151516125ad919033906130c5565b610480810151516101408301516125c49190614c4e565b61054082015261048081015151610500820151602001516125e59190614c4e565b610560820152610540810151156105a08201819052156126105761026082015161058082015261263e565b6105408101516104808201515161026084015161262d9190614c65565b6126379190614c9c565b6105808201525b61050081015151516105808201511061265e5760006105c082015261267d565b61058081015161050082015151516126769190614c4e565b6105c08201525b806105a0015115612699576102c08201516105e08201526126c7565b610540810151610480820151516102c08401516126b69190614c65565b6126c09190614c9c565b6105e08201525b61050081015151602001516105e0820151106126ea57600061060082015261270c565b6105e081015161050082015151602001516127059190614c4e565b6106008201525b6105c0810151610620820180519190915261060082015181516020908101919091529051610640830180519190915261056083018051825184015233600090815260048452604090819020805460ff1916600190811782559351805180519583019590955593850151600282015592840151600390930192909255516106608401805191909152610540840151815190930192909252905190517f9726bc74fd01f1452367f0793e4a847565395504804ad30b411db99dca7317bb916127d191614462565b60405180910390a161066081015160608401526127ec613dae565b825181516001600160a01b03918216905260208085015183518201526040808601518451908416908201526060808701518551941693810193909352608080870151855182015260a080880151865182015260c08089015187519091015260e0808901518751909101526102e08801518487018051919091526101008901518151909501949094526101808801518451909301929092526105408601518351909401939093528151439301929092526101608501519051909101526104c08201516105208301516124079190600190613039565b50505050565b816102e65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6128fc60016000541460126128c6565b815161291790158061291057508251600154145b60136128c6565b6000808055600280546129299061473f565b80601f01602080910402602001604051908101604052809291908181526020018280546129559061473f565b80156129a25780601f10612977576101008083540402835291602001916129a2565b820191906000526020600020905b81548152906001019060200180831161298557829003601f168201915b50505050508060200190518101906129ba91906148a1565b90506129c4613dce565b60408051855181526020808701511515908201527f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1910160405180910390a1612a158261010001513414600f6128c6565b61014082015160a08301515151612a2c9190614c84565b81515260a082018051516020908101518351909101525151604090810151825190151590820152820151610140830151612a7391612a6c913391906130ad565b60106128c6565b8151612a8b906001600160a01b0316331460116128c6565b60028260800151612a9c9190614c84565b602080830191909152604082018051600090819052905182015261010083015160608301805191909152610140840151905190910152612ada613dae565b825181516001600160a01b039182169052602080850151835182015260408086015184519084169101526060808601518451931692019190915260e0840151825160800152610120840151825160a0015260c084015190830151612b3e9190614c84565b815160c0015260408083018051835160e00152516020808401805192909252606080860151835183015290850151825190930192909252805160009201829052805143608091820152850151905160a0908101919091528401518351612ba49290613039565b60208201805160c00191909152610100840151905160e00152612bc6816130de565b5050505050565b612bd56138fa565b60016001600160a01b03831660009081526004602052604090205460ff166001811115612c0457612c046143c2565b1415612ca3576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115612c4557612c456143c2565b6001811115612c5657612c566143c2565b81528154610100900460ff16151560208083019190915260408051608081018252600185015481830190815260028601546060830152815260039094015491840191909152015292915050565b60008082526020820152919050565b612cc260036000541460176128c6565b8151612cdd901580612cd657508251600154145b60186128c6565b600080805560028054612cef9061473f565b80601f0160208091040260200160405190810160405280929190818152602001828054612d1b9061473f565b8015612d685780601f10612d3d57610100808354040283529160200191612d68565b820191906000526020600020905b815481529060010190602001808311612d4b57829003601f168201915b5050505050806020019051810190612d80919061495b565b9050612dcc6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b7f6aaed0856b0c8f841cffcf9b31e427e232358731a01886d87bb61ef30c84d3a984604051612dfb9190614db4565b60405180910390a16000602085015151516001811115612e1d57612e1d6143c2565b1415612f3e57612e2f341560146128c6565b604051600081527fefed8e46d7215e6683d44f2877bad4f38da0633910289cc79ec8baaf59336fb29060200160405180910390a1600080845282516101808401516040516001600160a01b039092169281156108fc029290818181858888f19350505050158015612ea4573d6000803e3d6000fd5b506101608201515151612eb79080614c4e565b815152610160820180515160209081015183519091015280515160409081015183519015159082015283015183519151612efa929060005b6020020151516130c5565b612f2382606001518360000151612f1c85610160015160008660000151613039565b6001612eef565b60008080556001819055612f3990600290613e1c565b6128c0565b6001602085015151516001811115612f5857612f586143c2565b14156128c057612f6a341560156128c6565b8151612f82906001600160a01b0316331460166128c6565b81516101808301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612fc0573d6000803e3d6000fd5b506101608201515151612fd39080614c4e565b60208281018051929092526101608401805151820151835190920191909152805151604090810151925192151592810192909252908301518351915161301b92906000612eef565b612f2382606001518360000151612f1c856101600151600086602001515b613041613e59565b60005b600281101561308d5784816002811061305f5761305f614d9e565b602002015182826002811061307657613076614d9e565b60200201528061308581614df5565b915050613044565b50818184600281106130a1576130a1614d9e565b60200201529392505050565b60006130bb8385308561365a565b90505b9392505050565b6130d0838383613734565b6130d957600080fd5b505050565b6130e6613ea4565b602082015160600151156130fb57600161310d565b815160c00151602083015160a0015111155b156133e557602082015160a00151825160c00151111561313557816020015160a0015161313c565b815160c001515b8082526020830151604090810151919091108015918301919091526131675760006020820152613182565b602082015160400151815161317c9190614c4e565b60208201525b81516080015160208201516131979190614c65565b602083015151516131a89190614c84565b6060820181905260208084015101515110156131cc576020808301510151516131d2565b80606001515b60808201526040810151156131ed57600060a0820152613208565b60208201516040015181516132029190614c4e565b60a08201525b816000015160a001518160a001516132209190614c65565b6020808401515101516132339190614c84565b60c082018190526020808401518101510151101561325d5781602001516020015160200151613263565b8060c001515b60e0820190815260808201516101008301805191909152905190516020015261328a613f47565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152855160809081015181860152865160a09081015181870152875160c09081015181880152885160e09081015181890152858a018051870151610100808b019190915281518701516101208b01528151909801516101408a015280518501516101608a01528051909301516101808901528251909101516101a088015281518101516101c0880152815151516101e0880152875161020088015287840151151561022088015281518501515161024088015291870151610260870152805151840151610280870152518301518301516102a08601528501516102c0850152918401516102e084015260066000554360015590516133c191839101614e4e565b604051602081830303815290604052600290805190602001906128c0929190614070565b602082015160a00151825160c00151111561340857816020015160a0015161340f565b815160c001515b610120820181905260208301516040015110801561016083015261343a57600061014082015261345a565b8160200151604001518161012001516134539190614c4e565b6101408201525b8151608001516101408201516134709190614c65565b602083015151516134819190614c84565b610180820181905260208084015101515110156134a6576020808301510151516134ad565b8061018001515b6101a0820152610160810151156134cb5760006101c08201526134eb565b8160200151604001518161012001516134e49190614c4e565b6101c08201525b815160a001516101c08201516135019190614c65565b6020808401515101516135149190614c84565b6101e082018190526020808401518101510151101561353f5781602001516020015160200151613546565b806101e001515b6102008201526135546140f4565b8251516001600160a01b0390811682528351602090810151818401528451604090810151831681850152855160609081015190931683850152855160809081015190850152855160a09081015190850152855160c09081015181860152865160e090810151818701528388018051850151610100880152805184015161012088015280519095015161014087015284519091015161016086015283510151610180850152825151516101a0808601919091528351830151516101c08601528501516101e08501528251518201516102008086019190915292518201518201516102208501529184015161024084015260036000554360015590516133c191839101614fdb565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916136c191615117565b60006040518083038185875af1925050503d80600081146136fe576040519150601f19603f3d011682016040523d82523d6000602084013e613703565b606091505b509150915061371482826001613805565b50808060200190518101906137299190615133565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161379391615117565b60006040518083038185875af1925050503d80600081146137d0576040519150601f19603f3d011682016040523d82523d6000602084013e6137d5565b606091505b50915091506137e682826002613805565b50808060200190518101906137fb9190615133565b9695505050505050565b606083156138145750816130be565b8251156138245782518084602001fd5b60405163100960cb60e01b8152600481018390526024016128e3565b604051806080016040528060001515815260200161385c613a6f565b815260200161387e604051806040016040528060008152602001600081525090565b81526020016138a0604051806040016040528060008152602001600081525090565b905290565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b031681526020016138ed604051806040016040528060008152602001600081525090565b8152602001600081525090565b60408051606081018252600080825260208201529081016138a06141e3565b60405180610200016040528061392d6141e3565b815260200161393a6141e3565b815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016138a0604051806040016040528060008152602001600081525090565b6040518060400160405280600081526020016138a060408051608081018252600060208201818152928201819052606082015290815290565b6040518060400160405280600081526020016138a0614205565b604080516080810182526000808252602080830182905283518082018552828152838501528351908101909352825290606082015290565b6040805160808101825260009181018281526060820192909252908152602081016138a06141e3565b604080516080810182526000918101828152606082019290925290819061387e565b604080516106e08101909152600061068082018181526106a083018290526106c0830191909152815260208101613ac6613e59565b8152602001613ad36141e3565b8152602001613ae06141e3565b8152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613b5f604051806040016040528060008152602001600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613ba1604051806040016040528060008152602001600081525090565b8152602001613bae6141e3565b8152602001613bd0604051806040016040528060008152602001600081525090565b8152602001613bdd613a6f565b8152602001613bff604051806040016040528060008152602001600081525090565b8152602001613c1a6040518060200160405280600081525090565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001613c4e6141e3565b8152602001613c5b6141e3565b8152602001600081526020016000815260200160001515815260200160008152602001613c9b604051806040016040528060008152602001600081525090565b8152602001613ca86141e3565b8152602001613cca604051806040016040528060008152602001600081525090565b8152602001613ce56040518060200160405280600081525090565b81526040805160608101825260008082526020828101829052928201529101908152602001613d12613e59565b8152602001613d1f6141e3565b8152602001613d2c6141e3565b81526040805160608101825260008082526020828101829052928201529101908152602001600081526020016000815260200160008152602001600015158152602001600081526020016000815260200160008152602001613da1604051806040016040528060008152602001600081525090565b815260200161387e6141e3565b6040518060400160405280613dc1614218565b81526020016138a0614293565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152819081526020016000815260200161387e604051806040016040528060008152602001600081525090565b508054613e289061473f565b6000825580601f10613e38575050565b601f016020900490600052602060002090810190613e5691906142ff565b50565b60405180604001604052806002905b613e8e604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081613e685790505090565b60405180610220016040528060008152602001600081526020016000151581526020016000815260200160008152602001600081526020016000815260200160008152602001613f07604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610300016040528060006001600160a01b03168152602001613f6b6138a5565b815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001613fc2604051806040016040528060008152602001600081525090565b8152602001613fe4604051806040016040528060008152602001600081525090565b81526020016000815260200160008152602001600081526020016000815260200161400d613e59565b815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081526020016000815260200160008152602001600081526020016138a0604051806040016040528060008152602001600081525090565b82805461407c9061473f565b90600052602060002090601f01602090048101928261409e57600085556140e4565b82601f106140b757805160ff19168380011785556140e4565b828001600101855582156140e4579182015b828111156140e45782518255916020019190600101906140c9565b506140f09291506142ff565b5090565b60405180610260016040528060006001600160a01b031681526020016141186138a5565b815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200161416f604051806040016040528060008152602001600081525090565b8152602001614191604051806040016040528060008152602001600081525090565b815260200160008152602001600081526020016141ac613e59565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051608081018252600091810182815260608201929092529081906138ed565b60405180602001604052806138a0613a0e565b60405180610100016040528060006001600160a01b0316815260200161423c6138a5565b815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016138a0604051806040016040528060008152602001600081525090565b60408051610140810190915260006101008201818152610120830191909152819081526020016142d6604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081526020016138ed613e59565b5b808211156140f05760008155600101614300565b600060a0828403121561432657600080fd5b50919050565b60018060a01b03808251168352806020830151166020840152506040810151614362604084018280518252602090810151910152565b506060015160809190910152565b60a0810161053d828461432c565b60006040828403121561432657600080fd5b6001600160a01b0381168114613e5657600080fd5b6000602082840312156143b757600080fd5b81356130be81614390565b634e487b7160e01b600052602160045260246000fd5b60028110613e5657613e566143c2565b815160a08201906143f8816143d8565b80835250602083015115156020830152604083015161442560408401825180518252602090810151910152565b602081015160808401525092915050565b6000806040838503121561444957600080fd5b823561445481614390565b946020939093013593505050565b81518152602080830151908201526040810161053d565b60006020828403121561448b57600080fd5b5035919050565b60006080828403121561432657600080fd5b60005b838110156144bf5781810151838201526020016144a7565b838111156128c05750506000910152565b82815260406020820152600082518060408401526144f58160608501602087016144a4565b601f01601f1916919091016060019392505050565b8151805182526020908101519082015260808101602083810151805160408501529081015160608401525b5092915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156145755761457561453c565b60405290565b6040516020810167ffffffffffffffff811182821017156145755761457561453c565b6040516080810167ffffffffffffffff811182821017156145755761457561453c565b6040516060810167ffffffffffffffff811182821017156145755761457561453c565b604051610160810167ffffffffffffffff811182821017156145755761457561453c565b604051610260810167ffffffffffffffff811182821017156145755761457561453c565b604051610300810167ffffffffffffffff811182821017156145755761457561453c565b8015158114613e5657600080fd5b60006020828403121561467057600080fd5b6040516020810181811067ffffffffffffffff821117156146935761469361453c565b6040529135825250919050565b600081830360a08112156146b357600080fd5b6146bb614552565b833581526080601f19830112156146d157600080fd5b6146d961457b565b91506146e361459e565b6020850135600381106146f557600080fd5b8152604085013561470581614650565b6020820152614717866060870161465e565b6040820152614729866080870161465e565b6060820152825260208101919091529392505050565b600181811c9082168061475357607f821691505b6020821081141561432657634e487b7160e01b600052602260045260246000fd5b80516112ce81614390565b60006040828403121561479157600080fd5b614799614552565b9050815181526020820151602082015292915050565b600060a082840312156147c157600080fd5b6147c961459e565b905081516147d681614390565b815260208201516147e681614390565b60208201526147f8836040840161477f565b60408201526080820151606082015292915050565b80516112ce81614650565b600082601f83011261482957600080fd5b614831614552565b8060c084018581111561484357600080fd5b845b81811015614896576060818803121561485e5760008081fd5b6148666145c1565b815181526020808301518183015260408084015161488381614650565b9083015290855290930192606001614845565b509095945050505050565b600061028082840312156148b457600080fd5b6148bc6145e4565b6148c583614774565b81526148d484602085016147af565b60208201526148e560c08401614774565b60408201526148f660e08401614774565b606082015261010080840151608083015261012061491686828701614818565b60a08401526101e085015160c084015261020085015160e084015261022085015191830191909152610240840151908201526102609092015161014083015250919050565b60006103c0828403121561496e57600080fd5b614976614608565b61497f83614774565b815261498e84602085016147af565b602082015261499f60c08401614774565b60408201526149b060e08401614774565b60608201526101008084015160808301526101208085015160a08401526101408086015160c08501526101606149e88882890161477f565b60e08601526101a06149fc89828a0161477f565b858701526101e094508488015184870152610200935083880151838701526102209250614a2b89848a01614818565b918601919091526102e0870151610180860152610300870151908501526103208601516101c08501526103408601519284019290925261036085015190830152610380840151908201526103a09092015161024083015250919050565b60006104808284031215614a9b57600080fd5b614aa361462c565b614aac83614774565b8152614abb84602085016147af565b6020820152614acc60c08401614774565b6040820152614add60e08401614774565b60608201526101008084015160808301526101208085015160a08401526101408086015160c0850152610160614b158882890161477f565b60e08601526101a0614b2989828a0161477f565b858701526101e0945084880151848701526102009350838801518387015261022092508288015182870152610240915081880151610180870152610260614b728a828b01614818565b828801526103208901516101c08801526103408901518688015261036089015185880152614ba36103808a0161480d565b848801526103a0890151838801526103c0890151818801525050505050506103e08301516102808201526104008301516102a08201526104208301516102c0820152614bf384610440850161477f565b6102e08201529392505050565b600060408284031215614c1257600080fd5b614c1a614552565b823581526020830135614c2c81614650565b60208201529392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015614c6057614c60614c38565b500390565b6000816000190483118215151615614c7f57614c7f614c38565b500290565b60008219821115614c9757614c97614c38565b500190565b600082614cb957634e487b7160e01b600052601260045260246000fd5b500490565b60008183036080811215614cd157600080fd5b614cd9614552565b833581526060601f1983011215614cef57600080fd5b614cf761457b565b9150614d016145c1565b602085013560028110614d1357600080fd5b81526040850135614d2381614650565b60208201526060850135614d3681614650565b6040820152825260208101919091529392505050565b81518152602082015151805160a08301919060038110614d6e57614d6e6143c2565b80602085015250602081015115156040840152604081015151606084015260608101515160808401525092915050565b634e487b7160e01b600052603260045260246000fd5b815181526020820151518051608083019190614dcf816143d8565b806020850152506020810151151560408401526040810151151560608401525092915050565b6000600019821415614e0957614e09614c38565b5060010190565b8060005b60028110156128c0578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101614e14565b81516001600160a01b0316815261048081016020830151614e72602084018261432c565b5060408301516001600160a01b03811660c08401525060608301516001600160a01b03811660e0840152506080830151610100818185015260a08501519150610120828186015260c08601519250610140838187015260e08701519350610160614ee88188018680518252602090810151910152565b9287015193506101a092614f088785018680518252602090810151910152565b918701516101e087810191909152908701516102008088019190915291870151610220808801919091526101808801516102408089019190915293880151945061026093919291614f5b85890187614e10565b6101c0890151610320890152928801516103408801529087015161036087015286015115156103808601528501516103a08501528401516103c0840152506102808301516103e08301526102a08301516104008301526102c08301516104208301526102e083015180516104408401526020810151610460840152614535565b81516001600160a01b031681526103c081016020830151614fff602084018261432c565b5060408301516001600160a01b03811660c08401525060608301516001600160a01b03811660e0840152506080830151610100818185015260a08501519150610120828186015260c08601519250610140838187015260e087015193506101606150758188018680518252602090810151910152565b9287015193506101a0926150958785018680518252602090810151910152565b918701516101e0878101919091529087015161020080880191909152918701519350906102206150c781880186614e10565b6101808801516102e0880152928701516103008701526101c08701516103208701529086015161034086015285015161036085015284015161038084015250610240909201516103a09091015290565b600082516151298184602087016144a4565b9190910192915050565b60006020828403121561514557600080fd5b81516130be8161465056fea2646970667358221220cf1c8cde85eb88065f29c85d1d67207be6ced2f5cae32affd0e277e47a77771c64736f6c634300080c0033`,
  BytecodeLen: 23317,
  Which: `oD`,
  version: 6,
  views: {
    end: `end`,
    opts: `opts`,
    remainingRewards: `remainingRewards`,
    rewardsAvailableAt: `rewardsAvailableAt`,
    staked: `staked`,
    totalStaked: `totalStaked`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:76:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:246:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:258:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:258:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:120:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Any_halt": Any_halt,
  "Deployer": Deployer,
  "Staker_harvest": Staker_harvest,
  "Staker_stake": Staker_stake,
  "Staker_withdraw": Staker_withdraw
  };
export const _APIs = {
  Any: {
    halt: Any_halt
    },
  Staker: {
    harvest: Staker_harvest,
    stake: Staker_stake,
    withdraw: Staker_withdraw
    }
  };
