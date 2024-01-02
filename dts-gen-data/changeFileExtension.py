import os

folderPath = '/home/sonnguyenhong/Documents/HongSon/Code/ronin-engineer/question-images/question-images'
newExtension = '.png'

print('NUM FILES: ', len(os.listdir(folderPath)))

for fileName in os.listdir(folderPath):
    oldFile = os.path.join(folderPath, fileName)
    newFile = os.path.join(folderPath, fileName + newExtension)
    os.rename(oldFile, newFile)