<?php

namespace App\Twig;

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ReactExtension extends AbstractExtension
{

    public function getFunctions()
    {
        return [
            new TwigFunction('react_component', [$this, 'reactComponent'], [
                'needs_environment' => true,
                'is_safe' => ['html']
            ])
        ];
    }

    /**
     * @param Environment $twig
     * @param string $name
     * @param array|null $props
     * @return string
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function reactComponent(Environment $twig, string $name, array $props = null)
    {
        return $twig->render('partial/react_component.html.twig', [
            'name' => $name,
            'props' => $props ?? []
        ]);
    }

}

