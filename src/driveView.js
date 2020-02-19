// switch (state.status) {
  //   case 'half':
  //     switch (event.type) { // { type: 'CLICK' }
  //       case 'CLICK':
  //         return {
  //           ...state,
  //           status: 'full'
  //         }

  //       default:
  //         return state; // nothing changes
  //     }

  //   case 'full':
  //       switch (event.type) {
  //         case 'CLICK':
  //           return {
  //             ...state,
  //             status: 'half'
  //           }

  //         default:
  //           return state; // nothing changes
  //       }

  //   default:
  //     // this will never be reached
  //     return state; // nothing changes
  // }