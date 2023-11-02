import type { ISourceOptions } from 'tsparticles-engine'

const options: ISourceOptions = {
  name: 'Gradients',
  particles: {
    number: {
      value: 100
    },
    gradient: [
      {
        type: 'radial',
        colors: [
          {
            stop: 0.25,
            value: '#5bc0eb'
          },
          {
            stop: 1,
            value: '#000000',
            opacity: 0
          }
        ]
      },
      {
        type: 'radial',
        colors: [
          {
            stop: 0.25,
            value: '#fde74c'
          },
          {
            stop: 1,
            value: '#000000',
            opacity: 0
          }
        ]
      },
      {
        type: 'radial',
        colors: [
          {
            stop: 0.25,
            value: '#9bc53d'
          },
          {
            stop: 1,
            value: '#000000',
            opacity: 0
          }
        ]
      },
      {
        type: 'radial',
        colors: [
          {
            stop: 0.25,
            value: '#e55934'
          },
          {
            stop: 1,
            value: '#000000',
            opacity: 0
          }
        ]
      },
      {
        type: 'radial',
        colors: [
          {
            stop: 0.25,
            value: '#fa7921'
          },
          {
            stop: 1,
            value: '#000000',
            opacity: 0
          }
        ]
      }
    ],
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 1
    },
    size: {
      value: {
        min: 15,
        max: 20
      },
      animation: {
        enable: true,
        speed: 5,
        sync: false
      }
    },
    move: {
      enable: true,
      speed: 5
    }
  },
  background: {
    color: '#000'
  }
}

export default options
