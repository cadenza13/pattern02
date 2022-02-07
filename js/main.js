'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const nav = document.querySelector('nav');
  const mask = document.querySelector('.mask');
  const target = document.querySelector('header');
  const contact = document.querySelector('.contact');

  open.addEventListener('click', ()=>{
    nav.classList.add('show');
    mask.classList.add('show');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
  });

  close.addEventListener('click', ()=>{
    nav.classList.remove('show');
    mask.classList.remove('show');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
  });

  function callback(entries){
    if(!entries[0].isIntersecting){
      contact.classList.add('appear');
    } else{
      contact.classList.remove('appear');
    }
  }

  const observer = new IntersectionObserver(callback);
  observer.observe(target);
}