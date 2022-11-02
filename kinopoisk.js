describe('Тестирование главной Яндекс', function () {
   it('Проверка, поиск на соответствие "Кинопоиск"', function () {
       cy.visit('https://www.google.ru/');
       cy.get('input:first').should('have.class','gLFyf gsfi').type('Кинопоиск').type('{enter}');
       cy.contains('Кинопоиск')
    })
})


