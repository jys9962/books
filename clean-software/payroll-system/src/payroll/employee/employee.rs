pub struct Employee {
    id: usize,
    name: String,
    address: String,
}

impl Employee {
    pub fn new(id: usize, name: String, address: String) -> Employee {
        Employee {
            id,
            name,
            address,
        }
    }

    pub fn get_name(&self) -> &str {
        &self.name
    }

    pub fn set_classification(&self) -> () {

    }

    pub fn set_schedule(&mut self) -> () {

    }

    pub fn set_method(&mut self) -> () {

    }
}
