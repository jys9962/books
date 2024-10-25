use crate::payroll::employee::employee::Employee;
use lazy_static::lazy_static;
use std::collections::HashMap;
use std::sync::{Mutex, MutexGuard};

pub struct GpayrollDatabase {
    its_employees: HashMap<usize, Employee>,
}

impl GpayrollDatabase {
    pub fn new() -> GpayrollDatabase {
        GpayrollDatabase { its_employees: HashMap::new() }
    }

    pub fn get_instance() -> MutexGuard<'_, GpayrollDatabase> {
        DATABASE.lock().unwrap()
    }

    pub fn get_employee(&self, id: usize) -> Option<&Employee> {
        self.its_employees.get(&id)
    }

    pub fn add_employee(&mut self, id: usize, employee: Employee) -> () {
        self.its_employees.insert(id, employee);
    }

    pub fn clear(&mut self) -> () {
        self.its_employees.clear();
    }
}

lazy_static! {
    static ref DATABASE: Mutex<GpayrollDatabase> = Mutex::new(GpayrollDatabase::new());
}
