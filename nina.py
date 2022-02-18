from random import random, randrange


print ("exo 1")
x = 2
print (x)

print ("exo 2")
x = 2
y = 4

print (x+y)
print (x-y)
print (x*y)
print (x%y)

print ("exo3")
x = "coucou"
print (x)

print ("exo4")
x = "coucou"
y = "petite perruche"
c = x+y
print (c)

print("exo5")
x = 10
y = 50
z = x
x = y
y = z 
print(x, y) 

print ("exo6")

a = 10
b = 20
if a > b:
    print("a>b")
elif a<b:
     print("a<b")
else: 
    print("a=b")

print("exo7")

a = 20
b = 30

def chiffre (a, b):
    if a > b:
        return a
    else: 
        return b 
print(chiffre(a,b))

print("exo8")

a = randrange (1,100,1)
print ( a )

print ( "exo9")

import random
for i in range(10) :
    print(random.randint(1,100))

print ("exo10")

u = 0

while u<=90:
    u = random.randint(1,100);
    print (u)
