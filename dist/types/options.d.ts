import { TreeNode } from "./tree-node";
/**
 * @ignore
 */
export declare type ComponentMode = "tree" | "singleSelectDropdown" | "multiSelectDropdown";
/**
 * @ignore
 */
export interface TreeConfiguration {
    /**
     * Add a searchbar to search for tree-nodes. (Default: `true`)
     */
    searchBar: boolean;
    /**
     * Determines if the searchbar requests the focus by default. (Default: `false`)
     */
    searchBarFocus: boolean;
    /**
     * Enables text-highlighting while searching. (Default: `false`)
     */
    highlightSearchResults: boolean;
    /**
     * A watermark text which is displayed if no value is selected.
     * Only used in modes `singleSelectDropdown` and `multiSelectDropdown`.
     * (Default: `Please select a value...`)
     */
    watermark: string;
    /**
     * A message text which is displayed if no tree-nodes are available at all or through filtering.
     * (Default: `No items found.`)
     */
    noNodesMessage: string;
    /**
     * Custom css-classes.
     */
    css: {
        /**
         * Custom css-class added to the dropdown-container element.
         * Only used in modes `singleSelectDropdown` and `multiSelectDropdown`.
         * (Default: `""`)
         */
        dropdownHolder: string;
    };
    /**
     * Template function which is called if the given node is selected.
     * Only used in modes `singleSelectDropdown` and `multiSelectDropdown`.
     * @param node The tree-node to return a text-value for.
     * @returns Any string value which should be displayed. (Default: `node.label`)
     */
    templateSelectedText: (node: TreeNode) => string;
    /**
     * Checkbox settings.
     * Only used in mode `tree`.
     */
    checkboxes: {
        /**
         * Enable checkboxes. This also enables multi-selection.
         * (Default: `false`)
         */
        active: boolean;
        /**
         * Indicates if the checkbox-value of a parent-node should also change the value of its childs.
         * (Default: `false`)
         */
        recursive?: boolean;
    };
    /**
     * Add a cross-button to clear the current value(s). (Default: `false`)
     */
    clearButton: boolean;
    /**
     * Element to prevent scrolling for when the dropdown is openend. (Default `null`)
     */
    scrollContainer: HTMLElement | null;
}
/**
 * All instance-specific options and behaviors to initialize the tree.
 */
export interface BaseOptions extends TreeConfiguration {
    /**
     * All tree-node data-objects to start with. Do not change this array afterwards.
     * (Default: `[]`)
     */
    nodes: TreeNode[];
}
/**
 * @ignore
 */
export declare const defaults: BaseOptions;
/**
 * A partial representation of `BaseOptions`. All other values are set to its defaults.
 */
export declare type Options = Partial<BaseOptions>;
