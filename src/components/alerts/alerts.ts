import Swal from "sweetalert2";

export const correct = (acction:string): void =>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${acction}`,
      showConfirmButton: false,
      timer: 1500
    });
  }
  
export const fail = (): void => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        timer: 1500
    });
}
export const noMorePages = (): void => {
  Swal.fire({
      icon: 'warning',
      title: 'Alert',
      text: 'This is the first page',
      timer: 1500,
  });
}
export const recharged = (timer:number, title:string ): void => {

  Swal.fire({
    title: title,
    html: "Please Wait",
    timer: timer,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading(); //=> Este error nunca supe que era, como tal no espera argumentos
      const timer = Swal.getPopup()?.querySelector("b");
      if (timer) {
        setInterval(() => {
          const timerLeft = Swal.getTimerLeft();
          if (timerLeft) {
            timer.textContent = `${timerLeft}`;
          }
        }, 100);
      }
    }
  })
};

const confirmAction = async (accion: string, course_code?: string, name?: string )=> {
 const result = await Swal.fire({
    icon: "info",
    title: `${accion} ${name} ${course_code}?`,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    customClass: {
      cancelButton: "custom-cancel-button",
      confirmButton: "custom-confirm-button",
    },
  });

  return result.isConfirmed;
  
}
export{confirmAction}