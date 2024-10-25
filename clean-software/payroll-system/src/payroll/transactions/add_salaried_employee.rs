use crate::payroll::transactions::transaction::Transaction;

pub struct AddSalariedEmployee {
    id: usize,

    name: String,
    address: String,
    salary: f64,
}

impl AddSalariedEmployee {
    pub fn new(id: usize, name: String, address: String, salary: f64) -> AddSalariedEmployee {
        AddSalariedEmployee {
            id,
            name,
            address,
            salary,
        }
    }
}

impl Transaction for AddSalariedEmployee {
    fn execute(&mut self) -> usize {
        1
    }
}
