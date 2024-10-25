use crate::payroll::database::gpayroll_database::GpayrollDatabase;
use crate::payroll::employee::employee::Employee;
use crate::payroll::transactions::transaction::Transaction;

struct PaymentClassification {}

struct PaymentSchedule {}

pub struct AddEmployeeTransaction {
    id: usize,
    name: String,
    address: String,
}

impl AddEmployeeTransaction {
    pub fn new(id: usize, name: String, address: String) -> Self {
        AddEmployeeTransaction {
            id,
            name,
            address,
        }
    }

    fn get_classification(&self) -> Option<PaymentClassification> {
        None
    }

    fn get_schedule(&self) -> Option<PaymentSchedule> {
        None
    }
}


impl Transaction for AddEmployeeTransaction {
    fn execute(self) -> () {
        let optional_classification = self.get_classification();
        let optional_schedule = self.get_schedule();

        let employee = Employee::new(self.id, self.name, self.address);

        employee.set_classification()

        GpayrollDatabase::add_employee()
    }
}
