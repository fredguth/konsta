<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Stepper,
    Block,
    BlockTitle,
    List,
    ListItem,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let value = 1;
  const increase = () => {
    value = value + 1;
  };
  const decrease = () => {
    value = value - 1 < 0 ? 0 : value - 1;
  };

  let inputValue = 1;
  const increaseInput = () => {
    const v = parseInt(inputValue, 10);
    if (isNaN(v)) inputValue = 0;
    else inputValue = v + 1;
  };
  const decreaseInput = () => {
    const v = parseInt(inputValue, 10);
    if (isNaN(v)) inputValue = 0;
    inputValue = v - 1 < 0 ? 0 : v - 1;
  };
  const onInputChange = (e) => {
    inputValue = e.target.value;
  };
  const onInputBlur = () => {
    if (isNaN(parseInt(inputValue, 10))) inputValue = 0;
  };
</script>

<Page>
  <Navbar title="Stepper">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Shape and size</BlockTitle>
  <Block strong class="text-center space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="block text-xs mb-1">Default</div>
        <Stepper {value} onPlus={increase} onMinus={decrease} />
      </div>
      <div>
        <div class="block text-xs mb-1">Round</div>
        <Stepper {value} rounded onPlus={increase} onMinus={decrease} />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 margin-top">
      <div>
        <div class="block text-xs mb-1">Outline</div>
        <Stepper {value} outline onPlus={increase} onMinus={decrease} />
      </div>
      <div>
        <div class="block text-xs mb-1">Rounded Outline</div>
        <Stepper {value} outline rounded onPlus={increase} onMinus={decrease} />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 margin-top">
      <div>
        <div class="block text-xs mb-1">Small</div>
        <Stepper {value} onPlus={increase} onMinus={decrease} small />
      </div>
      <div>
        <div class="block text-xs mb-1">Small Round</div>
        <Stepper {value} small rounded onPlus={increase} onMinus={decrease} />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 margin-top">
      <div>
        <div class="block text-xs mb-1">Small Outline</div>
        <Stepper {value} small outline onPlus={increase} onMinus={decrease} />
      </div>
      <div>
        <div class="block text-xs mb-1">Small Outline</div>
        <Stepper
          {value}
          small
          rounded
          outline
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 margin-top">
      <div>
        <div class="block text-xs mb-1">Large</div>
        <Stepper {value} onPlus={increase} onMinus={decrease} large />
      </div>
      <div>
        <div class="block text-xs mb-1">Large Round</div>
        <Stepper {value} large rounded onPlus={increase} onMinus={decrease} />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 margin-top">
      <div>
        <div class="block text-xs mb-1">Large Outline</div>
        <Stepper {value} large outline onPlus={increase} onMinus={decrease} />
      </div>
      <div>
        <div class="block text-xs mb-1">Large Rounded Outline</div>
        <Stepper
          {value}
          large
          rounded
          outline
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
    </div>
  </Block>

  <BlockTitle>Raised</BlockTitle>
  <Block strong class="text-center space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="block text-xs mb-1">Default</div>
        <Stepper {value} raised onPlus={increase} onMinus={decrease} />
      </div>
      <div>
        <div class="block text-xs mb-1">Round</div>
        <Stepper {value} raised rounded onPlus={increase} onMinus={decrease} />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 margin-top">
      <div>
        <div class="block text-xs mb-1">Outline</div>
        <Stepper {value} raised outline onPlus={increase} onMinus={decrease} />
      </div>
      <div>
        <div class="block text-xs mb-1">Round Outline</div>
        <Stepper
          {value}
          raised
          outline
          rounded
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 margin-top">
      <div>
        <div class="block text-xs mb-1">Small</div>
        <Stepper {value} raised small onPlus={increase} onMinus={decrease} />
      </div>
      <div>
        <div class="block text-xs mb-1">Small Round</div>
        <Stepper
          {value}
          raised
          small
          rounded
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 margin-top">
      <div>
        <div class="block text-xs mb-1">Small Outline</div>
        <Stepper
          {value}
          raised
          small
          outline
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
      <div>
        <div class="block text-xs mb-1">Small Rounded Outline</div>
        <Stepper
          {value}
          raised
          small
          rounded
          outline
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 margin-top">
      <div>
        <div class="block text-xs mb-1">Large</div>
        <Stepper {value} raised large onPlus={increase} onMinus={decrease} />
      </div>
      <div>
        <div class="block text-xs mb-1">Large Round</div>
        <Stepper
          {value}
          raised
          large
          rounded
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 margin-top">
      <div>
        <div class="block text-xs mb-1">Large Outline</div>
        <Stepper
          {value}
          raised
          large
          outline
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
      <div>
        <div class="block text-xs mb-1">Large Rounded Outline</div>
        <Stepper
          {value}
          raised
          large
          rounded
          outline
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
    </div>
  </Block>
  <BlockTitle>With Text Input</BlockTitle>
  <Block strong class="text-center space-y-4">
    <div>
      <Stepper
        value={inputValue}
        input
        onChange={onInputChange}
        onBlur={onInputBlur}
        onPlus={increaseInput}
        onMinus={decreaseInput}
      />
    </div>
    <div>
      <Stepper
        value={inputValue}
        outline
        input
        onChange={onInputChange}
        onBlur={onInputBlur}
        onPlus={increaseInput}
        onMinus={decreaseInput}
      />
    </div>
  </Block>
  <BlockTitle>Only Buttons</BlockTitle>
  <List>
    <ListItem title={`Value is ${value}`}>
      <Stepper
        slot="after"
        {value}
        buttonsOnly
        onPlus={increase}
        onMinus={decrease}
      />
    </ListItem>
    <ListItem title={`Value is ${value}`}>
      <Stepper
        slot="after"
        {value}
        outline
        buttonsOnly
        onPlus={increase}
        onMinus={decrease}
      />
    </ListItem>
    <ListItem title={`Value is ${value}`}>
      <Stepper
        slot="after"
        {value}
        raised
        outline
        buttonsOnly
        onPlus={increase}
        onMinus={decrease}
      />
    </ListItem>
  </List>

  <BlockTitle>Colors</BlockTitle>
  <Block strong class="text-center space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <Stepper
          {value}
          colors={{
            text: 'text-red-500',
            border: 'border-red-500',
            bg: 'bg-red-500',
            activeBg: 'active:bg-red-500',
            activeBgDark: 'active:bg-red-600',
          }}
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
      <div>
        <Stepper
          {value}
          rounded
          colors={{
            text: 'text-green-500',
            border: 'border-green-500',
            bg: 'bg-green-500',
            activeBg: 'active:bg-green-500',
            activeBgDark: 'active:bg-green-600',
          }}
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <Stepper
          {value}
          colors={{
            text: 'text-yellow-500',
            border: 'border-yellow-500',
            bg: 'bg-yellow-500',
            activeBg: 'active:bg-yellow-500',
            activeBgDark: 'active:bg-yellow-600',
          }}
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
      <div>
        <Stepper
          {value}
          rounded
          colors={{
            text: 'text-pink-500',
            border: 'border-pink-500',
            bg: 'bg-pink-500',
            activeBg: 'active:bg-pink-500',
            activeBgDark: 'active:bg-pink-600',
          }}
          onPlus={increase}
          onMinus={decrease}
        />
      </div>
    </div>
  </Block>
</Page>
