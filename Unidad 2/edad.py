	# from os import system
	# system("cls")
	# edad = int(input("Ingrese la edad de la persona: "))
	# if edad < 18:
	# 	print("Eres menor de edad.")
	# elif 18 <= edad <= 40:
	# 	print("Eres adulto joven.")
	# elif edad >=41 and edad < 65:
	# 	print("Eres adulto.")
	# else:
	# 	print("Eres un adulto mayor.")
 
import numpy as np


# Array de tres dimensiones
a3 = np.array([[["LINK", "LINK", "LINK"], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
# print(a3)
import numpy as np

a = np.array(["Leon", "Clear", "Jill", "Wesker"])

for index, element in enumerate(a):
    print("Index:", index, "Element:", element)
    

# Método 1: np.where()
elemento = "Jill"
indices = np.where(a == elemento)[0]
print("Índices de", elemento, ":", indices)

# Método 2: np.argmax()
indice = np.argmax(a == elemento)
print("Índice de", elemento, ":", indice)



