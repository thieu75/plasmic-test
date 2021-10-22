// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tgdPEKAb7CK8dgvRB6vUh3
// Component: HXmDXbThsl
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: d0hEfjBchb/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: tgdPEKAb7CK8dgvRB6vUh3/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: HXmDXbThsl/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: GeSQDtOjl0p/icon
import { Button } from "../../owned/button/button";

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  button?: p.Flex<"button">;
};

export interface DefaultHomepageProps {
  dataFetches: PlasmicHomepage__Fetches;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  dataFetches?: PlasmicHomepage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__m5UAz)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox___6Uyvf)}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"default" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"default" as const}
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox___2R55F)}
              >
                <p.Stack
                  as={p.PlasmicLink}
                  hasGap={true}
                  className={classNames(defaultcss.a, sty.link__lcPsc)}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__niDDy)}
                      role={"img"}
                    />
                  ) : null}

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text___5Y6Vz
                    )}
                  >
                    {"Services"}
                  </div>

                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__z4KJf)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>

                <p.Stack
                  as={p.PlasmicLink}
                  hasGap={true}
                  className={classNames(defaultcss.a, sty.link__mgJi3)}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__gyTnj)}
                      role={"img"}
                    />
                  ) : null}

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__pEK9
                    )}
                  >
                    {"Features"}
                  </div>

                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__d2NjA)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>

                <p.Stack
                  as={p.PlasmicLink}
                  hasGap={true}
                  className={classNames(defaultcss.a, sty.link__perL9)}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__li5Lh)}
                      role={"img"}
                    />
                  ) : null}

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__qzrK2
                    )}
                  >
                    {"Company"}
                  </div>

                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__dh87R)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>

                <p.Stack
                  as={p.PlasmicLink}
                  hasGap={true}
                  className={classNames(defaultcss.a, sty.link__kbAp6)}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__fvF5B)}
                      role={"img"}
                    />
                  ) : null}

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__d3Zdi
                    )}
                  >
                    {"Contact"}
                  </div>

                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__unIgE)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>

                <p.Stack
                  as={p.PlasmicLink}
                  hasGap={true}
                  className={classNames(defaultcss.a, sty.link__jVxg1)}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__gQxxW)}
                      role={"img"}
                    />
                  ) : null}

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__qhVoh
                    )}
                  >
                    {"Log in"}
                  </div>

                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__zGBw4)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>

                <p.Stack
                  as={p.PlasmicLink}
                  hasGap={true}
                  className={classNames(defaultcss.a, sty.link__v85Zd)}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__cozgp)}
                      role={"img"}
                    />
                  ) : null}

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__iqoM0
                    )}
                  >
                    {"Sign up"}
                  </div>

                  {false ? (
                    <IconIcon
                      className={classNames(defaultcss.all, sty.svg__n0Vl9)}
                      role={"img"}
                    />
                  ) : null}
                </p.Stack>
              </p.Stack>

              {false ? (
                <div className={classNames(defaultcss.all, sty.freeBox__vR9Hb)}>
                  <button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames(
                      defaultcss.button,
                      defaultcss.__wab_text,
                      sty.button
                    )}
                  >
                    {"Sign up"}
                  </button>

                  <p.Stack
                    as={p.PlasmicLink}
                    hasGap={true}
                    className={classNames(defaultcss.a, sty.link__vDieq)}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {false ? (
                      <IconIcon
                        className={classNames(defaultcss.all, sty.svg__tZgFv)}
                        role={"img"}
                      />
                    ) : null}

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__iZjWz
                      )}
                    >
                      {"Log in"}
                    </div>

                    {false ? (
                      <IconIcon
                        className={classNames(defaultcss.all, sty.svg__roDcs)}
                        role={"img"}
                      />
                    ) : null}
                  </p.Stack>
                </div>
              ) : null}
            </p.Stack>
          </p.Stack>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.text__xAG
            )}
          >
            {"Welcome to your first page."}
          </div>
          <Button />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "button"],
  img: ["img"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHomepage__Fetches;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
