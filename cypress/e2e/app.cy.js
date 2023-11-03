describe('template spec', () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173/")
  })

  it('should render the title', () => {
    cy.get("h1").contains("TODO List React")
  })

  it('should render the task with the provided name', () => {
    cy.get('[data-testid="task-input"]').should('have.attr', 'placeholder', 'Add a task')
    
    cy.get('[data-testid="taskLabel"]').should('contain', 'Buy water')
    cy.get('[data-testid="taskLabel"]').should('contain', 'Clean car')
  })

  it('should be able to edit the task name', () => {
    cy.get('[data-testid="taskEditIcon"]').first().click()
    cy.get('[data-testid="taskText"]').first().clear().type('New Task Name')
    cy.get('[data-testid="taskDoneIcon"]').first().click()
    cy.get('[data-testid="taskLabel"]').first().should('contain', 'New Task Name')
  })

  it('should be able to mark the task as completed', () => {
    cy.get('[data-testid="taskCheckbox"]').first().should('not.be.checked')
    cy.get('[data-testid="taskCheckbox"]').first().check()
    cy.get('[data-testid="taskLabel"]').first().should('have.css', 'text-decoration', 'line-through solid rgb(240, 255, 255)')
  })

  it('should be able to delete the task', () => {
    cy.get('[data-testid="taskClearIcon"]').should('have.length', 2)
    cy.get('[data-testid="taskClearIcon"]').first().click()
    cy.get('[data-testid="taskClearIcon"]').should('have.length', 1)
  })
})