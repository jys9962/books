#[cfg(test)]
mod tests {
    use crate::payroll::database::gpayroll_database::GpayrollDatabase;
    use crate::payroll::transactions::add_salaried_employee::AddSalariedEmployee;
    use crate::payroll::transactions::transaction::Transaction;

    #[test]
    fn test_add_salaried_employee() {
        let mut database = GpayrollDatabase::get_instance();

        let emp_id = 1usize;
        let mut t = AddSalariedEmployee::new(emp_id, String::from("Bob"), String::from("Home"), 1000.00);
        t.execute();

        let e = database.get_employee(emp_id);
        assert_eq!("Bob", e.get_name());

        let pc = e.get_classification();
    }
}
