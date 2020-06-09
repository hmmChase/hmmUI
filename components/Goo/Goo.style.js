import styled from 'styled-components';

export const EssVeeGee = styled.svg`
  pointer-events: none;
  position: absolute;
`;

export const Goo = styled.div`
  svg * {
    transform-origin: 50%;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate_back {
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes sway {
    100% {
      transform: translateX(10%);
    }
  }

  @keyframes drop {
    100% {
      transform: translateY(45%);
    }
  }

  @keyframes rise {
    100% {
      transform: translateY(-20%);
    }
  }

  @keyframes hero_one {
    100% {
      transform: rotate(360deg) translate(17.5%, 17.5%);
    }
  }

  @keyframes hero_two {
    100% {
      transform: rotate(360deg) translate(17.5%, -17.5%);
    }
  }

  @keyframes hero_three {
    100% {
      transform: rotate(360deg) translate(-17.5%, 17.5%);
    }
  }

  @keyframes hero_four {
    100% {
      transform: rotate(360deg) translate(-17.5%, -17.5%);
    }
  }

  @keyframes blob_one {
    100% {
      transform: rotate(-360deg) translate(-12.5%, -12.5%);
    }
  }

  @keyframes blob_two {
    100% {
      transform: rotate(-360deg) translate(12.5%, -12.5%);
    }
  }

  @keyframes blob_three {
    100% {
      transform: rotate(-360deg) translate(-12.5%, 12.5%);
    }
  }

  @keyframes blob_four {
    100% {
      transform: rotate(-360deg) translate(-12.5%, -12.5%);
    }
  }

  .main > :last-child {
    /* @apply mb-0; */
  }
`;
