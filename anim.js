// let options = {
//     root: null,
//     rootMargin: '5px',
//     threshold: 0.5
//   };
  
//   // функция обратного вызова
//   let callback = function(entries, observer) {
//     entries.forEach(entry => {
//         // если элемент является наблюдаемым
//         if (entry.isIntersecting) {
//             console.log('find', entry);
//             // добавим класс active к нему
//             entry.target.classList.add('active');
//         }
//     });
//   };
  
//   // наблюдатель
//   let observer = new IntersectionObserver(callback, options);
  
//   // определяем элементы, за которыми наблюдаем
//   let targets = document.querySelectorAll('.anim');
//   targets.forEach(target => {
//     observer.observe(target);
//   });
  
//   // ------------------------------
  
  
  
  let options = {
    root: null, // Отслеживаем вьюпорт
    rootMargin: '0px', // Отступ от границ
    threshold: 0.5 // 50% элемента должно быть видно
  };
  
  // Callback для IntersectionObserver
  let callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Элемент виден:', entry.target);
        entry.target.classList.add('active'); // Добавляем класс
      }
    });
  };
  
  // Создаём наблюдатель
  let observer = new IntersectionObserver(callback, options);
  
  // Выбираем все элементы с классом anim
  let targets = document.querySelectorAll('.anim');
  targets.forEach(target => {
    observer.observe(target);
  });
  