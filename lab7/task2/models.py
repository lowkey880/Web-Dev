class Animal: 
    def __init__(self, name, age, species):

        self.name = name
        self.age = age
        self.species = species
    
    def __str__(self):
        return f"{self.name} ({self.species}) - Age: {self.age} years"
    
    def speak(self):
        return
    
    def get_info(self):
        return f"{self.__str__()} says: {self.speak()}"
    
    def age_animal(self):
        self.age += 1
        return f"{self.name} is now {self.age} years old"


class Dog(Animal):
    def __init__(self, name, age, breed, is_trained=False):
        super().__init__(name, age, "Dog")
        self.breed = breed
        self.is_trained = is_trained
    
    def __str__(self):
        status = "trained" if self.is_trained else "untrained"
        return f"{self.name} (Breed: {self.breed}, {status}) - Age: {self.age} years"
    
    def speak(self):
        return "Woof! Woof!"
    
    def fetch(self, item):
        if self.is_trained:
            return f"{self.name} fetches the {item} and brings it back!"
        else:
            return f"{self.name} ignores you and doesn't fetch the {item}."
    
    def train(self):
        self.is_trained = True
        return f"{self.name} has been trained!"


class Cat(Animal):
    def __init__(self, name, age, color, indoor=True):
        super().__init__(name, age, "Cat")
        self.color = color
        self.indoor = indoor
    
    def __str__(self):
        location = "indoor" if self.indoor else "outdoor"
        return f"{self.name} (Color: {self.color}, {location}) - Age: {self.age} years"
    
    def speak(self):
        return "Meow! Meow!"
    
    def scratch(self, furniture):
        return f"{self.name} scratches the {furniture}. Better replace it!"
    
    def nap(self):
        duration = 3 if self.indoor else 1
        return f"{self.name} takes a {duration}-hour nap in the sun."