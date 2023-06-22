import IMask from 'imask';

export function maskMobile(){
    let elements = document.querySelectorAll('input[name="tel"]');
    let maskOptions = {
        mask: '+{380}(00)000-00-00'
      };
      for(let elem of elements){
        IMask(elem, maskOptions);

      }
    

}