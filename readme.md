# liser

functional css help to optimizing design work and building responsive websites. liser help you create the module contains the css properties you need to use quickly and lightest!

**liser** using **tachyons-cli** to build css lastest css files


# usage

## step 1

### clone liser repository
```bash
git clone https://github.com/lamhieu-vk/liser.git
```

## step 2

### create a modules

- create a directory with the name `example` located at `/src/modules`

- create a file with the same name as the directory (with the extension `.css`) at `/src`

- import all the components from `/src/modules/example` directory into the file `/src/example.css`

and now you have a new module

## step 3

### build official files

```bash
npm run build
```

it will run build main files and build split files to dir `/build`

### build main files

```bash
npm run build:main
```

### build split files

```bash
npm run build:split
```

### build a module

```bash
name={module_name} npm run build:module {...modules_list}
```

[**module_name**]: replace with a name you want

[**...modules_list**]: replace with list name of modules you need build (in `/src`). exmaple: box-shadow colors widths

```bash
example:
name=simple npm run build:module box-shadow colors widths
```

module name is `simple` and it will combine `box-shadow` `colors` `widths` modules

## step 4

after build completed, you can use that file for your site


# todos

- [ ] fork modules from [ciser](https://github.com/lamhieu-vk/ciser) to liser


# modules

these are already supported modules

- [-] box-sizing, view source [here](https://github.com/lamhieu-vk/liser/tree/master/src/modules/box-sizing)

- [-] [background-position](https://github.com/lamhieu-vk/liser/blob/master/docs/background-position.md), view source [here](https://github.com/lamhieu-vk/liser/tree/master/src/modules/background-position)

- [-] [aspect-ratio](https://github.com/lamhieu-vk/liser/blob/master/docs/aspect-ratio.md), view source [here](https://github.com/lamhieu-vk/liser/tree/master/src/modules/aspect-ratio)

- [-] [animations](https://github.com/lamhieu-vk/liser/blob/master/docs/animations.md), view source [here](https://github.com/lamhieu-vk/liser/tree/master/src/modules/animations)

- [-] [box-shadow](https://github.com/lamhieu-vk/liser/blob/master/docs/box-shadow.md), view source [here](https://github.com/lamhieu-vk/liser/tree/master/src/modules/box-shadow)


# version

### beta: 0.0.1

### stable: -

### lastest: 0.0.1


# license

[MIT](https://github.com/lamhieu-vk/liser/blob/master/LICENSE)
