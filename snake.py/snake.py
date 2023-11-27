import pygame
import time
import random

snakeSpeed = 15

#rgb ; red green blue
noir = pygame.Color(0,0,0)
blanc = pygame.Color(255,255,255)
vert = pygame.Color(0,255,255)
rouge = pygame.Color(255,0,0)

windowsX = 720
windowsY = 480

pygame.init()

pygame.display.set_caption("Snake le gourmand")
ecranJeu = pygame.display.set_mode((windowsX, windowsY))

fps = pygame.time.Clock()


positionSerpent = [100,50]

corpsSerpent = [[100, 50], [90 , 50], [80, 50], [70, 50]]

positionFruit = [random.randrange(1, windowsX // 10) * 10, random.randrange(1, windowsY // 10)* 10]

fruitPresent = True

direction = 'RIGHT'
changeDirection = direction











while True:    

    for event in pygame.event.get():
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_UP:
                changeDirection = 'UP'
            elif event.key == pygame.K_DOWN:
                changeDirection = 'DOWN'
            elif event.key == pygame.K_RIGHT:
                changeDirection = 'RIGHT'
            elif event.key == pygame.K_LEFT:
                changeDirection = 'LEFT'


    if changeDirection == 'UP' and direction != 'DOWN':
        direction = 'UP'
    elif changeDirection == 'DOWN' and direction != 'UP':
        direction = 'DOWN'
    elif changeDirection == 'RIGHT' and direction != 'LEFT':
        direction = 'RIGHT'
    elif changeDirection == 'LEFT' and direction != 'RIGHT':
        direction = 'LEFT'
    
    if direction == 'UP':
        positionSerpent[1] -= 10
    elif direction == 'DOWN':
        positionSerpent[1] += 10
    elif direction == 'RIGHT':
        positionSerpent[0] += 10
    elif direction == 'LEFT':
        positionSerpent[0] -= 10

    corpsSerpent.insert(0, list(positionSerpent))
    corpsSerpent.pop()


    ecranJeu.fill(noir)
    
    for pos in corpsSerpent:
        pygame.draw.rect(ecranJeu, vert, pygame.Rect(pos[0], pos[1], 10, 10))

    pygame.display.update()

    fps.tick(snakeSpeed)



