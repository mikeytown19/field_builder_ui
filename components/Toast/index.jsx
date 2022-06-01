import {
  ToastProvider,
  ToastViewport,
  ToastRoot,

  ToastDescription,

  ToastClose,
} from "./Toast";


const Toast = ({ title }) => {
  return <ToastProvider swipeDirection="left">
    <ToastRoot duration={3000}>

      <ToastDescription />

      <ToastClose>
        {title}
      </ToastClose>

    </ToastRoot>

    <ToastViewport />
  </ToastProvider>
}


export default Toast