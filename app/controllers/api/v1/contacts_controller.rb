class Api::V1::ContactsController < ApplicationController
  def index
    render json: [
      {type: "Executive", name: "Anna Jones", title: 'CEO', phone: "423462728", ext: "", fax: "45245235", email: "anna.jones@test.com"},
      {type: "InmarAR", name: "Tina Jones", title: 'Dolor sit', phone: "423462728", ext: "", fax: "45245235", email: "anna.jones@test.com"},
      {type: "Executive", name: "Anna Martin", title: 'Dev', phone: "423462728", ext: "", fax: "245235", email: "anna.jones@test.com"},
      {type: "Daily", name: "Ram Jones", title: 'test', phone: "423462728", ext: "34", fax: "45245235", email: "anna.jones@test.com"},
      {type: "Others", name: "Kevin Jones", title: 'CTO', phone: "423462728", ext: "", fax: "45245235", email: "anna.jones@test.com"}
    ]
  end
end