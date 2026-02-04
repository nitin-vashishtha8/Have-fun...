marks = 103

if marks >= 101:
    print("Check your marks once again.")
    exit()
if marks >= 90:
    print("A")
elif 80 <= marks <= 89:
    print("B")
elif 70 <= marks <= 79:
    print("C")
elif 60 <= marks <= 69:
    print("D")
else:
    print("FAIL")