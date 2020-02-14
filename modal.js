function call_order_modal() {
  document.getElementById('call-order-modal').style.display = 'flex';
}
function enter_modal(){
  document.getElementById('enter-modal').style.display = 'flex';
}
function call_send_modal() {
  document.getElementById('call-send-modal').style.display = 'flex';
}
function close_modal() {
  let modals = Array.from(document.getElementsByClassName('modal'));
  for (let i = 0; i<modals.length; i++){
    modals[i].style.display = 'none';
  }
}