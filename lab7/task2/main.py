from models import Animal, Dog, Cat

def main():


    dog1 = Dog("Buddy", 3, "Golden Retriever", is_trained=True)
    dog2 = Dog("Max", 1, "Labrador", is_trained=False)
    cat1 = Cat("Whiskers", 5, "Orange", indoor=True)
    cat2 = Cat("Shadow", 2, "Black", indoor=False)

    print(f"Created: {dog1.__str__()}")
    print(f"Created: {dog2.__str__()}")
    print(f"Created: {cat1.__str__()}")
    print(f"Created: {cat2.__str__()}")

    animals = [dog1, dog2, cat1, cat2]

    for i, animal in enumerate(animals, 1):
        print(f"  {i}. {animal}")
    print() 

    for animal in animals:
        print(f"\n{animal.name}:")
        print(f"  Info: {animal.get_info()}")
        
        if isinstance(animal, Dog):
            print(f"  Action: {animal.fetch('ball')}")
        elif isinstance(animal, Cat):
            print(f"  Action: {animal.scratch('couch')}")
    print()


    for animal in animals:
        print(f"  {animal.name} ({animal.species}): {animal.speak()}")
    print()
    print(f"\nDog Training:")
    print(f"  {dog2.train()}")
    print(f"  {dog2.fetch('stick')}")
    print()
    
    print("Cat Behavior:")
    print(f"  {cat1.nap()}")
    print()
    
if __name__ == "__main__":
    main()