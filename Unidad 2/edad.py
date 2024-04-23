from os import system
system("cls")
edad = int(input("Ingrese la edad de la persona: "))
if edad < 18:
	print("Eres menor de edad.")
elif 18 <= edad <= 40:
	print("Eres adulto joven.")
elif edad >=41 and edad < 65:
	print("Eres adulto.")
else:
	print("Eres un adulto mayor.")
